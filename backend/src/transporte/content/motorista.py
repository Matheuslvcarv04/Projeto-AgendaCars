"""Schema do cadastro de motoristas."""

from zope import schema

from plone.supermodel import model


class IMotorista(model.Schema):
    """Dados cadastrais e situação do motorista."""

    nome = schema.TextLine(
        title="Nome",
        required=True,
    )
    matricula = schema.TextLine(
        title="Matrícula",
        required=True,
    )
    cnh = schema.TextLine(
        title="CNH",
        required=True,
    )
    validade_cnh = schema.Date(
        title="Validade da CNH",
        required=True,
    )
    telefone = schema.TextLine(
        title="Telefone",
        required=True,
    )
    usuario_id = schema.TextLine(
        title="Usuário Plone vinculado",
        required=False,
        readonly=True,
    )
    situacao = schema.Choice(
        title="Situação",
        values=("pendente", "ativo", "inativo"),
        default="pendente",
        required=True,
    )
