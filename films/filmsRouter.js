const express = require('express');

const Film = require('./Film.js');

const router = express.Router();

// add endpoints here
router.get('/', (req, res) => {
    const producerFilter = req.query.producer;
    const releasedFilter = req.query.released;

    let query = Film.find()
    .sort('episode')
    .populate(
        'characters', 
        'name gender skin_color hair_color eye_color'
    )

    if (producerFilter) {
        const filter = new regExp(producerFilter, 'i');
        query.where({ producer: filter });
    }
    if (releasedFilter) {
        const filter = new RegExp(releaseFilter, 'i');
        query.where({ release_date: filter });
    }
    query
    .then(films => {
        res.send(films);
    })
    .catch(err => {
        res.status(400).send({ error: err });
    });
});

module.exports = router;
