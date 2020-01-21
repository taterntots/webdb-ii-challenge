const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();


//gets a list of cars
router.get('/', (req, res) => {
  // db.get()
  //   .then(cars => {
  //     res.status(200).json(cars);
  //   })
  //   .catch(error => {
  //     res.status(500).json({ errorMessage: 'There was an error retrieving the list of cars' })
  //   })
})

module.exports = router;