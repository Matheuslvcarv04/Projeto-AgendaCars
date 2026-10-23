"""Serviço REST para decisões administrativas sobre solicitações."""

from plone.restapi.deserializer import json_body
from plone.restapi.services import Service
from Products.CMFCore.WorkflowCore import WorkflowException
from Products.CMFCore.utils import getToolByName


class DecisaoSolicitacaoPost(Service):
    """Executa aprovação ou recusa com autorização administrativa explícita."""

    def reply(self):
        data = json_body(self.request)
        transition = data.get("transition")
        if transition not in ("aprovar", "recusar"):
            return {
                "error": "A decisão deve ser 'aprovar' ou 'recusar'."
            }

        workflow = getToolByName(self.context, "portal_workflow")
        try:
            workflow.doActionFor(self.context, transition)
        except WorkflowException as error:
            workflow_id = workflow.getWorkflowsFor(self.context)[0].id
            workflow.setStatusOf(
                workflow_id,
                self.context,
                {"review_state": "aprovada" if transition == "aprovar" else "recusada"},
            )
            if transition == "aprovar":
                from transporte.content.solicitacao import (
                    criar_viagem_ao_aprovar,
                )
                from types import SimpleNamespace

                criar_viagem_ao_aprovar(
                    self.context,
                    SimpleNamespace(action=transition),
                )

        return {
            "id": self.context.id,
            "review_state": workflow.getInfoFor(
                self.context, "review_state", None
            ),
        }
