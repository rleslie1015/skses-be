exports.up = function(knex) {
  return knex.schema
    .createTable('visions', tbl => {
        tbl
            .increments()
        tbl
            .string('name', 255)
            .notNullable()
        tbl
            .boolean()
            .defaultTo('false')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('visions');
};
