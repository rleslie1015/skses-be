exports.up = function(knex) {
  return knex.schema
    .createTable('visions', tbl => {
        tbl
            .increments()
        tbl
            .integer('user')
            .notNullable()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .string('name', 255)
            .notNullable()
        tbl
            .boolean("compleleted")
            .defaultTo('false')
        tbl
            .string("image", 500)
            .defaultTo("https://www.cccrockland.org/wp-content/uploads/vision.jpg")
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('visions');
};
