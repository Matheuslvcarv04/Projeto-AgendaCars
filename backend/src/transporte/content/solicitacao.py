"""Schema e regras de negócio das solicitações de transporte."""

import re
from datetime import datetime
from datetime import time

from zope.annotation.interfaces import IAnnotations
from zope.component import adapter
from zope.component import getUtility
from zope import schema
from zope.interface import Invalid
from zope.interface import invariant
from zope.intid.interfaces import IIntIds
from zope.lifecycleevent.interfaces import IObjectAddedEvent

from Products.CMFCore.utils import getToolByName
from Products.CMFCore.interfaces import IActionSucceededEvent
from plone import api
from plone.supermodel import model
from z3c.relationfield.relation import RelationValue

VIAGEM_CRIADA_KEY = "transporte.viagem_criada"
HORARIO_PATTERN = re.compile(r"^(?:[01]\d|2[0-3]):[0-5]\d$")


def validar_horario(value):
    """Valida horário no formato HH:MM."""
    if not HORARIO_PATTERN.fullmatch(value):
        raise Invalid("Informe o horário no formato HH:MM.")
    return True


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
        constraint=validar_horario,
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
    vai_dirigir = schema.Bool(
        title="O solicitante será o motorista?",
        default=False,
        required=True,
    )
    nome_motorista = schema.TextLine(
        title="Nome do motorista",
        required=False,
    )
    matricula_motorista = schema.TextLine(
        title="Matrícula do motorista",
        required=False,
    )
    cnh_motorista = schema.TextLine(
        title="CNH",
        required=False,
    )
    validade_cnh_motorista = schema.Date(
        title="Validade da CNH",
        required=False,
    )
    telefone_motorista = schema.TextLine(
        title="Telefone do motorista",
        required=False,
    )

    @invariant
    def validar_dados_motorista(data):
        """Exige os dados necessários quando o solicitante dirigir."""
        if data.vai_dirigir and not all(
            (
                data.nome_motorista,
                data.matricula_motorista,
                data.cnh_motorista,
                data.validade_cnh_motorista,
                data.telefone_motorista,
            )
        ):
            raise Invalid(
                "Informe nome, matrícula, CNH, validade da CNH e telefone "
                "do motorista."
            )


@adapter(ISolicitacao, IObjectAddedEvent)
def atribuir_proprietario(solicitacao, event):
    """Restringe a solicitação ao usuário que a criou e aos administradores."""
    creator = solicitacao.Creator()
    if creator:
        user = api.user.get(username=creator)
        nome = user.getProperty("fullname") if user else None
        solicitacao.solicitante = nome or creator
        solicitacao.manage_setLocalRoles(creator, ["Owner"])
        solicitacao.reindexObjectSecurity()
        api.user.grant_roles(username=creator, roles=["Solicitante"])


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
    solicitacao_uid = solicitacao.UID()
    for brain in getToolByName(solicitacao, "portal_catalog")(
        portal_type="Viagem"
    ):
        viagem_existente = brain.getObject()
        relacao = getattr(viagem_existente, "solicitacao", None)
        relacao = (
            relacao.to_object if hasattr(relacao, "to_object") else relacao
        )
        if relacao is not None and relacao.UID() == solicitacao_uid:
            annotations[VIAGEM_CRIADA_KEY] = True
            return

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

    if solicitacao.vai_dirigir:
        catalog = getToolByName(solicitacao, "portal_catalog")
        motoristas = [
            brain
            for brain in catalog(portal_type="Motorista")
            if brain.getObject().usuario_id == solicitacao.Creator()
        ]
        if motoristas:
            motorista = motoristas[0].getObject()
        else:
            motorista_id = container.invokeFactory(
                type_name="Motorista",
                title=solicitacao.nome_motorista,
            )
            motorista = container[motorista_id]
            motorista.nome = solicitacao.nome_motorista
            motorista.matricula = solicitacao.matricula_motorista
            motorista.cnh = solicitacao.cnh_motorista
            motorista.validade_cnh = solicitacao.validade_cnh_motorista
            motorista.telefone = solicitacao.telefone_motorista
            motorista.usuario_id = solicitacao.Creator()
            motorista.situacao = "pendente"
            motorista.reindexObject()
        viagem.motorista = RelationValue(intids.getId(motorista))

    from transporte.security import atribuir_proprietario_viagem
    from transporte.security import sincronizar_motorista_viagem

    atribuir_proprietario_viagem(viagem, None)
    sincronizar_motorista_viagem(viagem, None)
    annotations[VIAGEM_CRIADA_KEY] = True
    viagem.reindexObject()
    solicitacao.reindexObject()
