const express = require('express');

const Starship = require('./Starship.js');

const router = express.Router();

// add endpoints here
router.route('/').get((req, res) => {
    Starship.find()
    .then(starships => {
        res.status(200).json(starships);
    })
    .catch(err => {
        res.status(500).json({
            err: 'Cannot retrieve starship'
        });
    });
});

module.exports = router;
