const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development)

async function add(data) {
 [createdId] = await db("todos").insert(data);
 return await find(createdId);
  //return {"title":"shopping","done":true};
}

async function find(id) {
 return foundData = await db('todos').where({id:id}).first();
  //return {"title":"shopping","done":true};
}

async function findAll(){
  return allData = await db('todos').select();
}

async function update(id,data){
  return await db('todos').where({id:id}).update(data);
  //return await find(6);
  //return 3;
  //return updatedId;
}

async function deleteTodo(id,data){
  deletedId = await db('todos').where({id:id}).del();
  return deletedId;
}



module.exports = {db,add,find,findAll,update, deleteTodo}

