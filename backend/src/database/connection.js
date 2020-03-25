const knex = require('knex')
const configuration  = require('../../knexfile')

const connection  = knex(configuration.development)//vem lá da config do knex

module.exports = connection