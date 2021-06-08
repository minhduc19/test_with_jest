const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development)

async function add(data) {
  const createdData = await db("todos").insert(data);
  return createdData;
}

module.exports = {db,add}

