exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('visions').del()
    .then(function () {
      // Inserts seed entries
      return knex('visions').insert([
        { user: 1, name: 'Code for fun' },
        { user: 1, name: 'Clean Space' },
        { user: 1, name: 'Dress Well' }
      ]);
    });
};
