"""Schema e validações das viagens de transporte."""

from zope.component import adapter
from zope.lifecycleevent.interfaces import IObjectModifiedEvent
from zope import schema
from zope.interface import Invalid
from zope.interface import invariant
from z3c.relationfield.schema import RelationChoice

from plone.app.vocabularies.catalog import CatalogSource
from plone.supermodel import model
from zope.lifecycleevent.interfaces import IObjectAddedEvent


class IViagem(model.Schema):
    """Dados operacionais, checklist e quilometragem de uma viagem."""

    solicitacao = RelationChoice(
        title="Solicitação de origem",
        source=CatalogSource(portal_type="Solicitacao"),
        required=False,
    )
    horario = schema.Datetime(
        title="Horário",
        required=True,
    )
    veiculo = RelationChoice(
        title="Veículo",
        source=CatalogSource(portal_type="Veiculo"),
        required=False,
    )
    motorista = RelationChoice(
        title="Motorista",
        source=CatalogSource(portal_type="Motorista"),
        required=False,
    )
    destino = schema.TextLine(
        title="Destino",
        required=True,
    )
    setor = schema.TextLine(
        title="Setor",
        required=True,
    )
    situacao = schema.Choice(
        title="Situação",
        values=("programada", "em_andamento", "concluida", "cancelada"),
        default="programada",
        required=True,
    )

    pneus = schema.Bool(title="Pneus", default=False, required=True)
    freios = schema.Bool(title="Freios", default=False, required=True)
    farois = schema.Bool(title="Faróis", default=False, required=True)
    lanternas = schema.Bool(title="Lanternas", default=False, required=True)
    limpadores = schema.Bool(title="Limpadores", default=False, required=True)
    cintos = schema.Bool(title="Cintos", default=False, required=True)
    combustivel_ok = schema.Bool(title="Combustível ok", default=False, required=True)
    documentacao = schema.Bool(title="Documentação", default=False, required=True)
    extintor = schema.Bool(title="Extintor", default=False, required=True)
    estado_geral = schema.Text(
        title="Estado geral",
        required=False,
    )
    checklist_resultado = schema.Choice(
        title="Resultado do checklist",
        values=("apto", "com_problema"),
        required=False,
    )
    km_saida = schema.Int(title="Km de saída", min=0, default=0, required=True)
    km_chegada = schema.Int(title="Km de chegada", min=0, default=0, required=True)
    km_percorridos = schema.Int(
        title="Km percorridos",
        min=0,
        readonly=True,
        required=False,
    )

    @invariant
    def validar_situacao_e_quilometragem(data):
        """Impede viagem sem checklist apto e quilometragem inválida."""
        if data.situacao == "em_andamento" and data.checklist_resultado != "apto":
            raise Invalid(
                "A viagem só pode entrar em andamento com checklist apto."
            )
        if data.km_chegada < data.km_saida:
            raise Invalid("A quilometragem de chegada não pode ser menor que a saída.")


@adapter(IViagem, IObjectAddedEvent)
def atribuir_proprietario(viagem, event):
    """Permite ao solicitante consultar a viagem originada por seu pedido."""
    from transporte.security import atribuir_proprietario_viagem

    atribuir_proprietario_viagem(viagem, event)


@adapter(IViagem, IObjectModifiedEvent)
def atualizar_km_percorridos(viagem, event):
    """Atualiza a quilometragem calculada após alterações na viagem."""
    viagem.km_percorridos = max(0, viagem.km_chegada - viagem.km_saida)
