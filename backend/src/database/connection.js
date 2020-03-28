const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development; //Verifica se 
//o que está sendo executado é test, se não, executa o ambiente de desenvolvimento.

const connection = knex(config); 

module.exports = connection;