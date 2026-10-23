"""Add-on transporte do Porto do Recife."""

# Importa os módulos de conteúdo durante a inicialização do pacote para que
# as interfaces de schema estejam disponíveis quando o GenericSetup importa
# os tipos Dexterity.
from .content import abastecimento  # noqa: F401
from .content import motorista  # noqa: F401
from .content import solicitacao  # noqa: F401
from .content import veiculo  # noqa: F401
from .content import viagem  # noqa: F401
