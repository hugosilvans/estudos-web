const express = require('express');
const path = require('node:path');
const apiRoutes = require('./routes/api');

const app = express();
const port = Number(process.env.PORT || 3000);

// O JSON deve ser interpretado antes de chegar às rotas que acessam req.body.
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/users', apiRoutes);

// Exportar o app permite testar as rotas sem abrir uma porta durante o import.
if (require.main === module) {
  app.listen(port, () => console.log(`Servidor em http://localhost:${port}`));
}
module.exports = app;
