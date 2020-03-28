const express = require('express'); //Contém todas as funcionalidades do Express.
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

// app.listen(3333); "Ouve" a porta 3333. Ex.: localhost:3333 para acessar a aplicação.

module.exports = app;

