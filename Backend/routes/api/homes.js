//homes.js
const express = require('express');
const router = express.Router();
const Home = require('../../models/Home');

// GET homes by city
router.get('/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const homes = await Home.find({ city });
    res.json(homes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST add a new home
router.post('/', async (req, res) => {
  try {
    const newHome = new Home(req.body);
    await newHome.save();
    res.json(newHome);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

