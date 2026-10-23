"""Endpoint REST do painel gerencial diário."""

from datetime import date

from plone.restapi.services import Service

from .utils import catalog_objects
from .utils import object_date


class PainelGet(Service):
    """Retorna contagens de viagens do dia e veículos disponíveis."""

    def reply(self):
        from AccessControl.SecurityManagement import getSecurityManager

        if not getSecurityManager().checkPermission(
            "Manage transport", self.context
        ):
            self.request.response.setStatus(403)
            return {"error": "Apenas administradores podem consultar o painel."}
        today = date.today()
        viagens = [
            viagem
            for viagem in catalog_objects(self.context, "Viagem")
            if object_date(viagem.horario) == today
        ]
        situacoes = ("programada", "em_andamento", "concluida", "cancelada")
        por_situacao = {
            situacao: sum(viagem.situacao == situacao for viagem in viagens)
            for situacao in situacoes
        }
        veiculos_disponiveis = sum(
            vehicle.situacao == "disponivel"
            for vehicle in catalog_objects(self.context, "Veiculo")
        )
        return {
            "data": today.isoformat(),
            "viagens_por_situacao": por_situacao,
            "veiculos_disponiveis": veiculos_disponiveis,
        }
