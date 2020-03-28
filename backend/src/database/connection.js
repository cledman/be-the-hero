const knex = require('knex')
const configuration  = require('../../knexfile')

// pega a variável node_env pra usar no ambiente de teste configurado no package.json
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development

//const connection  = knex(configuration.development)//vem lá da config do knex
const connection  = knex(config)//vem lá da config do knex

module.exports = connection