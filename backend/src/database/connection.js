const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //Conexão de desevolvimento.

module.exports = connection;