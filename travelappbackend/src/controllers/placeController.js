const axios = require('axios');
const Place = require('../models/place');

const getPlacesFromOpenAI = async (req, res) => {
  const { city } = req.params;
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions', {
      prompt: `List some popular places to visit in ${city}.`,
      max_tokens: 100,
    }, {
      headers: {
        
        'Content-Type': 'application/json'
      }
    });

    const places = response.data.choices[0].text.split('\n').filter(Boolean).map(place => ({ name: place, description: '', city }));

    await Place.insertMany(places);

    res.status(200).json({ message: 'Places retrieved and saved successfully', places });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve places', error: error.message });
  }
};

const getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    res.status(200).json({ message: 'Failed to retrieve places', error: error.message });
  }
};

const deletePlace = async (req, res) => {
  const { id } = req.params;
  try {
    await Place.findByIdAndDelete(id);
    res.status(200).json({ message: 'Place deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete place', error: error.message });
  }
};

module.exports = { getPlacesFromOpenAI, getPlaces, deletePlace };
