"""Endpoint de atualização controlada do checklist de uma viagem."""

import json

from AccessControl.SecurityManagement import getSecurityManager
from plone.restapi.services import Service


CHECKLIST_FIELDS = {
    "pneus",
    "freios",
    "farois",
    "lanternas",
    "limpadores",
    "cintos",
    "combustivel_ok",
    "documentacao",
    "extintor",
}
ALLOWED_FIELDS = CHECKLIST_FIELDS | {
    "estado_geral",
    "checklist_resultado",
    "km_saida",
    "km_chegada",
}


class ChecklistPost(Service):
    """Permite ao motorista atribuído editar somente checklist e quilometragem."""

    def reply(self):
        if not getSecurityManager().checkPermission(
            "Update checklist", self.context
        ):
            self.request.response.setStatus(403)
            return {"error": "Você não pode editar esta viagem."}

        try:
            body = self.request.get("BODY", b"{}")
            if isinstance(body, bytes):
                body = body.decode("utf-8")
            data = json.loads(body)
        except (UnicodeDecodeError, json.JSONDecodeError):
            self.request.response.setStatus(400)
            return {"error": "O corpo da requisição deve ser JSON válido."}

        if not isinstance(data, dict) or not data:
            self.request.response.setStatus(400)
            return {"error": "Informe os campos do checklist a atualizar."}

        invalid_fields = set(data) - ALLOWED_FIELDS
        if invalid_fields:
            self.request.response.setStatus(400)
            return {
                "error": "Campos não permitidos: {}.".format(
                    ", ".join(sorted(invalid_fields))
                )
            }

        for field in CHECKLIST_FIELDS.intersection(data):
            if not isinstance(data[field], bool):
                self.request.response.setStatus(400)
                return {"error": "Os itens do checklist devem ser booleanos."}

        if "estado_geral" in data and not isinstance(data["estado_geral"], str):
            self.request.response.setStatus(400)
            return {"error": "O estado geral deve ser um texto."}

        if "checklist_resultado" in data and data["checklist_resultado"] not in (
            "apto",
            "com_problema",
        ):
            self.request.response.setStatus(400)
            return {"error": "Resultado de checklist inválido."}

        for field in ("km_saida", "km_chegada"):
            if field in data and (
                not isinstance(data[field], int)
                or isinstance(data[field], bool)
                or data[field] < 0
            ):
                self.request.response.setStatus(400)
                return {"error": "A quilometragem deve ser um inteiro não negativo."}

        values = {
            field: getattr(self.context, field)
            for field in CHECKLIST_FIELDS
        }
        values.update(
            {
                field: data[field]
                for field in CHECKLIST_FIELDS.intersection(data)
            }
        )
        km_saida = data.get("km_saida", self.context.km_saida)
        km_chegada = data.get("km_chegada", self.context.km_chegada)
        if km_chegada < km_saida:
            self.request.response.setStatus(400)
            return {
                "error": "A quilometragem de chegada não pode ser menor que a saída."
            }

        resultado = data.get(
            "checklist_resultado", self.context.checklist_resultado
        )
        if resultado == "apto" and not all(values.values()):
            self.request.response.setStatus(400)
            return {
                "error": "Todos os itens do checklist devem estar marcados para a viagem ficar apta."
            }

        for field, value in data.items():
            setattr(self.context, field, value)
        self.context.km_percorridos = km_chegada - km_saida
        if resultado == "apto":
            self.context.situacao = "em_andamento"
        self.context.reindexObject()
        return {"@id": self.context.absolute_url(), "updated": True}
