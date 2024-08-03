const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }, 
  phoneNumber: {
    type: String,
    required: true
  },
  needsFood: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Home', HomeSchema);
