const knexfile = require('./knexfile');
const file = knexfile.development;
const knex = require('knex')(file);

module.exports = knex;
