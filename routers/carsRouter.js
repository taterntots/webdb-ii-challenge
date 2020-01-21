const express = require("express");
const router = express.Router();
const knex = require("knex");

//gets a list of cars
router.get('/', (req, res) => {
  // ProjectDb.get()
  //   .then(cars => {
  //     res.status(200).json(cars);
  //   })
  //   .catch(error => {
  //     res.status(500).json({ errorMessage: 'There was an error retrieving the list of cars' })
  //   })
})

module.exports = router;