const express = require('express');
const { getPlacesFromOpenAI, getPlaces, deletePlace } = require('../controllers/placeController');
const router = express.Router();

router.get('/:city', getPlacesFromOpenAI);
router.get('/', getPlaces);
router.delete('/:id', deletePlace);

module.exports = router;
