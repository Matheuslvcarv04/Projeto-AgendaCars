# transporte

Add-on Plone para solicitacao e agendamento de transporte institucional.

O projeto usa `pyproject.toml` como configuracao unica de build e dependencias.

## Acesso e cadastro de motoristas

- `Administrador` representa o papel administrativo do add-on e pode consultar
  cadastros, históricos, painel, disponibilidade e relatórios. O papel nativo
  `Manager` continua aceito para compatibilidade com instalações existentes.
- Cada solicitante pode consultar apenas as próprias solicitações e viagens.
- Um solicitante pode informar os dados de motorista no pedido. O cadastro fica
  pendente e só recebe o papel `Motorista` depois da aprovação do administrador
  na página `/motoristas`.
- Motoristas aprovados podem consultar apenas viagens atribuídas a eles e editar
  o checklist dessas viagens. Cadastros de motoristas, veículos e abastecimentos
  permanecem visíveis somente para administradores.

As restrições são aplicadas no Plone e na API; ocultar uma rota no frontend não
substitui as permissões do backend.