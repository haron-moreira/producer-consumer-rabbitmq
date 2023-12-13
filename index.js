// index.js
const express = require('express');
const app = express();
const port = 3001;
const routes = require('./src/routes/index');

app.use(express.json());
// Configurar o aplicativo para usar as rotas
app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});