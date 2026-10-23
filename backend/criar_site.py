import os
import transaction

INSTANCE_HOME = os.path.abspath("instance")
os.environ["INSTANCE_HOME"] = INSTANCE_HOME

from Zope2.Startup.run import make_wsgi_app
import Zope2
from Products.CMFPlone.factory import addPloneSite


class RequestDict(dict):
    """Request minimo usado pelo addPloneSite."""
    pass


zope_conf = os.path.join(INSTANCE_HOME, "etc", "zope.conf")

# Inicializa o Zope
make_wsgi_app({}, zope_conf)

# Abre a aplicação Zope
app = Zope2.app()

try:
    app.REQUEST = RequestDict(
        HTTP_ACCEPT_LANGUAGE="pt-br"
    )

    if "Plone" in app.objectIds():
        print("========================================")
        print("O site /Plone ja existe.")
        print("========================================")
    else:
        print("Criando o site /Plone...")

        addPloneSite(
            app,
            site_id="Plone",
            title="Transporte Porto Recife",
            description="Sistema de Agendamento de Veiculos",
            default_language="pt-br",
            portal_timezone="America/Recife",
        )

        transaction.commit()

        print("========================================")
        print("SITE /PLONE CRIADO COM SUCESSO!")
        print("========================================")

finally:
    transaction.abort()
    app._p_jar.close()