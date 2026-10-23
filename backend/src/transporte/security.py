"""Controle de acesso por proprietário e motorista atribuído."""

from plone import api
from Products.CMFCore.utils import getToolByName


ROLE_MOTORISTA_ATRIBUIDO = "MotoristaAtribuido"


def atribuir_proprietario_viagem(viagem, event):
    """Atribui a viagem ao solicitante que criou o pedido."""
    solicitacao = getattr(viagem, "solicitacao", None)
    if not solicitacao:
        return
    solicitacao = (
        solicitacao.to_object
        if hasattr(solicitacao, "to_object")
        else solicitacao
    )
    creator = solicitacao.Creator()
    if creator:
        viagem.manage_setLocalRoles(creator, ["Owner"])
        viagem.reindexObjectSecurity()


def _usuario_motorista(motorista):
    """Retorna o identificador Plone associado a um motorista ativo."""
    if not motorista or motorista.situacao != "ativo":
        return None
    return motorista.usuario_id or None


def _objeto_relacionado(value):
    if value is None:
        return None
    return value.to_object if hasattr(value, "to_object") else value


def sincronizar_motorista_viagem(viagem, event):
    """Concede acesso local à viagem somente ao motorista atualmente atribuído."""
    local_roles = dict(getattr(viagem, "__ac_local_roles__", {}) or {})
    for userid, roles in list(local_roles.items()):
        updated_roles = [role for role in roles if role != ROLE_MOTORISTA_ATRIBUIDO]
        if updated_roles:
            local_roles[userid] = updated_roles
        else:
            local_roles.pop(userid, None)

    motorista = _objeto_relacionado(getattr(viagem, "motorista", None))
    userid = _usuario_motorista(motorista)
    if userid:
        roles = list(local_roles.get(userid, []))
        if ROLE_MOTORISTA_ATRIBUIDO not in roles:
            roles.append(ROLE_MOTORISTA_ATRIBUIDO)
        local_roles[userid] = roles

    viagem.__ac_local_roles__ = local_roles
    viagem.reindexObjectSecurity()


def sincronizar_permissoes_motorista(motorista, event):
    """Ativa ou remove o papel de motorista após revisão administrativa."""
    userid = motorista.usuario_id
    if not userid:
        return

    user = api.user.get(username=userid)
    if user is None:
        raise ValueError(
            "O usuário Plone vinculado ao cadastro de motorista não existe."
        )

    if motorista.situacao == "ativo":
        api.user.grant_roles(username=userid, roles=["Motorista"])
    else:
        api.user.revoke_roles(username=userid, roles=["Motorista"])

    catalog = getToolByName(motorista, "portal_catalog")
    for brain in catalog(portal_type="Viagem"):
        viagem = brain.getObject()
        assigned = _objeto_relacionado(getattr(viagem, "motorista", None))
        if assigned is motorista:
            sincronizar_motorista_viagem(viagem, event)
