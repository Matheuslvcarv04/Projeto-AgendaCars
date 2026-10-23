"""Endpoint REST de disponibilidade para uma data."""

from plone.restapi.services import Service

from .utils import catalog_objects
from .utils import object_date
from .utils import parse_date
from .utils import relation_info


class DisponibilidadeGet(Service):
    """Lista veículos e motoristas sem viagem na data informada."""

    def reply(self):
        if not self._is_manager():
            self.request.response.setStatus(403)
            return {"error": "Apenas administradores podem consultar a disponibilidade."}
        try:
            requested_date = parse_date(self.request.form.get("data"))
        except ValueError as error:
            self.request.response.setStatus(400)
            return {"error": str(error)}

        viagens = [
            viagem
            for viagem in catalog_objects(self.context, "Viagem")
            if object_date(viagem.horario) == requested_date
            and viagem.situacao != "cancelada"
        ]
        used_vehicle_uids = {
            relation_info(viagem.veiculo)["uid"]
            for viagem in viagens
            if relation_info(viagem.veiculo)
        }
        used_driver_uids = {
            relation_info(viagem.motorista)["uid"]
            for viagem in viagens
            if relation_info(viagem.motorista)
        }

        vehicles = [
            vehicle
            for vehicle in catalog_objects(self.context, "Veiculo")
            if vehicle.situacao == "disponivel"
            and vehicle.UID() not in used_vehicle_uids
        ]
        drivers = [
            driver
            for driver in catalog_objects(self.context, "Motorista")
            if driver.situacao == "ativo" and driver.UID() not in used_driver_uids
        ]
        return {
            "data": requested_date.isoformat(),
            "veiculos": [self._vehicle_info(vehicle) for vehicle in vehicles],
            "motoristas": [self._driver_info(driver) for driver in drivers],
        }

    def _is_manager(self):
        from AccessControl.SecurityManagement import getSecurityManager

        return getSecurityManager().checkPermission(
            "Manage transport", self.context
        )

    @staticmethod
    def _vehicle_info(vehicle):
        return {
            "uid": vehicle.UID(),
            "title": vehicle.Title(),
            "placa": vehicle.placa,
            "modelo": vehicle.modelo,
            "situacao": vehicle.situacao,
        }

    @staticmethod
    def _driver_info(driver):
        return {
            "uid": driver.UID(),
            "title": driver.Title(),
            "nome": driver.nome,
            "matricula": driver.matricula,
            "situacao": driver.situacao,
        }
