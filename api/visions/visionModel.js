const db = require('../../data/dbConfig')

module.exports = {
    findAll,
    findById,
    deleteVision,
    editVision,
    addVision
}

function findAll(){
    return db('visions')
}

function findById(id) {
    return db('visions')
    .where({id})
}

function deleteVision(id) {
    return db('visions')
    .where({id})
    .del()
}

function editVision(id, changes) {
    return db(visions)
    .where({ id })
    .updates(changes)
}
// why did i put an id here? do i need this here?

function addVision(obj, id) { 
    return db('vision')
    .insert(obj)
    .then(() => {
        findAll()
    })
}