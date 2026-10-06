"""Schema do cadastro de veículos."""

import re

from zope import schema
from zope.interface import Invalid

from plone.supermodel import model


PLACA_PATTERN = re.compile(r"^[A-Z]{3}(?:[0-9]{4}|[0-9][A-Z][0-9]{2})$")


def validar_placa(value):
    """Valida placas nos formatos ABC1234 e ABC1D23."""
    placa = value.upper().replace("-", "")
    if not PLACA_PATTERN.fullmatch(placa):
        raise Invalid("Informe uma placa válida: ABC1234 ou ABC1D23.")
    return True


class IVeiculo(model.Schema):
    """Dados cadastrais e situação operacional do veículo."""

    placa = schema.TextLine(
        title="Placa",
        constraint=validar_placa,
        required=True,
    )
    modelo = schema.TextLine(
        title="Modelo",
        required=True,
    )
    ano = schema.Int(
        title="Ano",
        min=1900,
        required=True,
    )
    combustivel = schema.Choice(
        title="Combustível",
        values=("gasolina", "etanol", "diesel", "flex"),
        required=True,
    )
    km_atual = schema.Int(
        title="Km atual",
        min=0,
        default=0,
        required=True,
    )
    situacao = schema.Choice(
        title="Situação",
        values=("disponivel", "em_uso", "em_manutencao", "indisponivel"),
        default="disponivel",
        required=True,
    )
