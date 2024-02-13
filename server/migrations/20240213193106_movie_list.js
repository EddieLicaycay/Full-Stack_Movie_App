/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('movie_list', table => {
    table.increments('id');
    table.string('Title').notNullable();
    table.string('ReleaseDate')
    table.string('Rated');
    table.string('Genre');
    table.string('Poster');
    table.string('Rating');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movie_list');
};
