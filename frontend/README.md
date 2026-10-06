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