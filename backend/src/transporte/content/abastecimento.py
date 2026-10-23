"""Schema do histórico de abastecimento."""

from zope import schema
from z3c.relationfield.schema import RelationChoice

from plone.app.vocabularies.catalog import CatalogSource
from plone.supermodel import model


class IAbastecimento(model.Schema):
    """Registro de abastecimento associado a veículo e motorista."""

    veiculo = RelationChoice(
        title="Veículo",
        source=CatalogSource(portal_type="Veiculo"),
        required=True,
    )
    data = schema.Date(title="Data", required=True)
    quilometragem = schema.Int(title="Quilometragem", min=0, required=True)
    litros = schema.Float(title="Litros", min=0.0, required=True)
    valor = schema.Float(title="Valor", min=0.0, required=True)
    posto = schema.TextLine(title="Posto", required=True)
    motorista = RelationChoice(
        title="Motorista",
        source=CatalogSource(portal_type="Motorista"),
        required=False,
    )
