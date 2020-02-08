// setting up knex 
// Knex is a library that is an intermediary between js and our database
// we can use this library to write SQL statements in JavaScript
const knex = require('knex')

const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

module.exports = db;

// THE FOLLOWING IS NOT BEST PRACTICE
// the bare minimum config object
// const config = {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/posts.db3',
//     },
//     useNullAsDefault: true,
//   };
  
//   module.exports = knex(config);