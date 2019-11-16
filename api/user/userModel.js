const db = require('../../data/dbConfig')

module.exports = {
    findAll,
    findById,
    addUser,
    deleteUser,
    editUser
}

function findAll() {
    return db('user')
}

function findById(id) {
    return db('user')
    .where({ id })
}

function addUser(user) {

    return db('user')
    .insert(user)
    .then(() => {
        findAll()
    })
}

function deleteUser(id) {
    return db('user')
    .where({ id })
    .del()
}

function editUser(id, changes) {
    return db('user')
    .where({ id })
    .update(changes)
}