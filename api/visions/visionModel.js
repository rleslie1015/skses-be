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
//changed id
function addVision(obj) {
    return db('visions')
    .insert(obj)
    .then(() => {
        findAll()
    })
}