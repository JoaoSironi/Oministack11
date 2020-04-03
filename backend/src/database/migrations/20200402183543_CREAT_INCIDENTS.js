exports.up = function(knex) {
    return knex.schema.createTable('INCIDENTS', function(table) {
      table.increments();
  
      table.string('TITLE').notNullable();
      table.string('DESCRIPTION').notNullable();
      table.decimal('VALUE').notNullable();
  
      table.string('ONG_ID').notNullable();
  
      table.foreign('ONG_ID').references('ID').inTable('ONGS');
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('INCIDENTS');
};
