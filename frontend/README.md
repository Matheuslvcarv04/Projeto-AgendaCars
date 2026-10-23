# Frontend Transporte Porto do Recife

Aplicacao Volto que consome o add-on local `@transporte/volto-transporte`.

## Executar

```powershell
npm install
$env:RAZZLE_PROXY = "http://localhost:8080/Plone"
npm start
```

O frontend fica em `http://localhost:3000` e encaminha as chamadas para o Plone
definido em `RAZZLE_PROXY`.

## Acesso às páginas

As páginas administrativas (painel, aprovações e cadastro de motoristas) são
exibidas somente para usuários com papel `Manager`. Solicitantes autenticados
podem criar pedidos e consultar `/minhas-solicitacoes`; motoristas aprovados
podem acessar a agenda, o checklist e o formulário de abastecimento. O backend
Plone também aplica controle de acesso aos registros e endpoints.