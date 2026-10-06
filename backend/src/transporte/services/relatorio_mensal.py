"""Endpoint REST do relatório mensal agregado."""

from datetime import date

from plone.restapi.services import Service

from .utils import catalog_objects
from .utils import object_date


class RelatorioMensalGet(Service):
    """Agrega viagens, quilometragem e abastecimentos do mês."""

    def reply(self):
        month = self.request.form.get("mes")
        if not month or len(month) != 7 or month[4] != "-":
            self.request.response.setStatus(400)
            return {"error": "O parâmetro mes deve usar o formato YYYY-MM."}
        try:
            year, month_number = map(int, month.split("-"))
            first_day = date(year, month_number, 1)
        except (TypeError, ValueError):
            self.request.response.setStatus(400)
            return {"error": "O parâmetro mes deve usar o formato YYYY-MM."}

        viagens = [
            viagem
            for viagem in catalog_objects(self.context, "Viagem")
            if object_date(viagem.horario).year == first_day.year
            and object_date(viagem.horario).month == first_day.month
            and viagem.situacao != "cancelada"
        ]
        abastecimentos = [
            abastecimento
            for abastecimento in catalog_objects(self.context, "Abastecimento")
            if abastecimento.data.year == first_day.year
            and abastecimento.data.month == first_day.month
        ]
        return {
            "mes": month,
            "total_viagens": len(viagens),
            "km_total": sum(viagem.km_percorridos or 0 for viagem in viagens),
            "litros": sum(item.litros for item in abastecimentos),
            "valor_combustivel": sum(item.valor for item in abastecimentos),
        }
