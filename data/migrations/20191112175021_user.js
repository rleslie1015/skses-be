exports.up = function(knex) {
  return knex.schema
    .createTable('user', tbl => {
        tbl
            .increments()
        tbl
            .string('username', 255)
            .notNullable()
        tbl
            .string('password', 255)
            
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user');
};
