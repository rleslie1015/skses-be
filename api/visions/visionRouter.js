const router = require('express').Router();
const dbModel = require('./visionModel');

router
    .get('/', (req, res) => {
        dbModel.findAll()
            .then(post => {
                res.status(201).json(post)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    })