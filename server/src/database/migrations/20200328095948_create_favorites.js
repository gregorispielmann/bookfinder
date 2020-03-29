exports.up = function(knex) {
  return knex.schema.createTable('favorites', table => {
    table.increments();
    table.string('book').notNullable();
    table.integer('user_id').notNullable();
    table
      .foreign('user_id')
      .references('id')
      .inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('favorites');
};
