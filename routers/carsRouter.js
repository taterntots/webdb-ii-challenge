const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();


//gets a list of cars
router.get('/', (req, res) => {
  db.select('*')
    .from('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving the list of cars' })
    })
})

router.post('/', (req, res) => {
  db.insert(req.body)
    .into('cars')
    .then(ids => {
      db.select('*')
        .from('cars')
        .where({ VIN: ids[0] })
        .then(newCar => {
          res.status(201).json(newCar);
        })
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Failed to add new car data' })
    })
})

module.exports = router;