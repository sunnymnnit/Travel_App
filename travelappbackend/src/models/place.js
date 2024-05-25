const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
});

const Place = mongoose.model('Place', placeSchema,'Place');

module.exports = Place;
