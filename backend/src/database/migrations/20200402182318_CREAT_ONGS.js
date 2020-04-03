exports.up = function(knex) {
  return knex.schema.createTable('ONGS', function(table) {
      table.string('ID').primary();
      table.string('NAME').notNullable();
      table.string('EMAIL').notNullable();
      table.string('WHATSAPP').notNullable();
      table.string('CITY').notNullable();
      table.string('UF', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ONGS');
};
