const knex = require('knex');
const configuration = require('../../knexfile');

/** Cria conexao com o banco */
const connection = knex(configuration.development);

module.exports = connection;