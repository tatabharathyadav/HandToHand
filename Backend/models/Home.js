// backend/models/Home.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  needsFood: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Home', HomeSchema);
