// routes/api/homes.js
const express = require('express');
const router = express.Router();
const Home = require('../../models/Home');

// GET homes by city
// GET homes by city
router.get('/city/:city', async (req, res) => {
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
  const { name, address, city, phoneNumber, needsFood, password } = req.body;
  try {
    const newHome = new Home({ name, address, city, phoneNumber, needsFood, password });
    await newHome.save();
    res.json(newHome);
  } catch (error) {
    res.status(500).json({ error: 'Error adding home' });
  }
});

// POST login
router.post('/login', async (req, res) => {
  const { homeName, city, password } = req.body;
  try {
    const home = await Home.findOne({ name: homeName, city });
    if (home && home.password === password) {
      res.json(home);
    } else {
      res.status(400).json({ error: 'Invalid home name, city, or password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// GET home by ID
router.get('/:id', async (req, res) => {
  try {
    const home = await Home.findById(req.params.id);
    res.json(home);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// PUT update home status
router.put('/:id', async (req, res) => {
  try {
    const home = await Home.findByIdAndUpdate(
      req.params.id,
      { needsFood: req.body.needsFood },
      { new: true }
    );
    res.json(home);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.post('/check-duplicate', async (req, res) => {
  const { name, city } = req.body;

  try {
    const home = await Home.findOne({ name, city });
    if (home) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

