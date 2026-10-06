"""Schema e regras de negócio das solicitações de transporte."""

from datetime import datetime
from datetime import time

from zope.annotation.interfaces import IAnnotations
from zope.component import adapter
from zope.component import getUtility
from zope import schema
from zope.intid.interfaces import IIntIds

from Products.CMFCore.utils import getToolByName
from Products.CMFCore.interfaces import IActionSucceededEvent
from plone.supermodel import model
from z3c.relationfield.relation import RelationValue


VIAGEM_CRIADA_KEY = "transporte.viagem_criada"


class ISolicitacao(model.Schema):
    """Dados necessários para solicitar um transporte institucional."""

    solicitante = schema.TextLine(
        title="Solicitante",
        required=True,
    )
    setor = schema.TextLine(
        title="Setor",
        required=True,
    )
    data = schema.Date(
        title="Data",
        required=True,
    )
    horario_saida = schema.TextLine(
        title="Horário de saída",
        description="Informe o horário no formato HH:MM.",
        required=True,
    )
    local_saida = schema.TextLine(
        title="Local de saída",
        required=True,
    )
    destino = schema.TextLine(
        title="Destino",
        required=True,
    )
    qtd_passageiros = schema.Int(
        title="Quantidade de passageiros",
        min=1,
        required=True,
    )
    motivo = schema.Text(
        title="Motivo da viagem",
        required=True,
    )
    prioridade = schema.Choice(
        title="Prioridade",
        values=("baixa", "media", "alta"),
        required=True,
    )


@adapter(ISolicitacao, IActionSucceededEvent)
def criar_viagem_ao_aprovar(solicitacao, event):
    """Cria automaticamente uma viagem na aprovação da solicitação."""
    if event.action != "aprovar":
        return

    workflow = getToolByName(solicitacao, "portal_workflow")
    estado = workflow.getInfoFor(solicitacao, "review_state", None)
    if estado != "aprovada":
        return

    annotations = IAnnotations(solicitacao)
    if annotations.get(VIAGEM_CRIADA_KEY):
        return

    container = solicitacao.__parent__
    viagem_id = container.invokeFactory(
        type_name="Viagem",
        title="Viagem - {}".format(solicitacao.getId()),
    )
    viagem = container[viagem_id]
    hora = time.fromisoformat(solicitacao.horario_saida)
    viagem.horario = datetime.combine(solicitacao.data, hora)
    viagem.destino = solicitacao.destino
    viagem.setor = solicitacao.setor
    viagem.situacao = "programada"
    intids = getUtility(IIntIds)
    viagem.solicitacao = RelationValue(intids.getId(solicitacao))

    annotations[VIAGEM_CRIADA_KEY] = True
    viagem.reindexObject()
    solicitacao.reindexObject()
