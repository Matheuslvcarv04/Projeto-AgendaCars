"""Funções compartilhadas pelos serviços REST."""

from datetime import date
from datetime import datetime

from Products.CMFCore.utils import getToolByName


def catalog_objects(context, portal_type):
    """Retorna objetos do catálogo para um tipo Dexterity."""
    catalog = getToolByName(context, "portal_catalog")
    return [brain.getObject() for brain in catalog(portal_type=portal_type)]


def parse_date(value, field_name="data"):
    """Converte YYYY-MM-DD e gera erro de API para entradas inválidas."""
    try:
        return date.fromisoformat(value)
    except (TypeError, ValueError):
        raise ValueError(
            "O parâmetro {} deve usar o formato YYYY-MM-DD.".format(field_name)
        )


def object_date(value):
    """Normaliza Date e DateTime para date."""
    if isinstance(value, datetime):
        return value.date()
    return value


def relation_info(value):
    """Serializa uma relação para o formato mínimo usado pelo frontend."""
    if value is None:
        return None
    obj = value.to_object if hasattr(value, "to_object") else value
    return {"uid": obj.UID(), "title": obj.Title(), "path": "/".join(obj.getPhysicalPath())}
