
exports.up = function(knex) {
  return knex.schema
    .createTable('todos', function (table) {
       table.increments('id');
       table.string('title', 255).notNullable();
       table.string('done', 255).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("todos")
     
};
