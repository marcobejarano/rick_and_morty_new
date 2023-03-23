const express = require('express');
const router = express.Router();
const getCharacterById = require('../controllers/getCharacterById');
const getCharacterDetailById = require('../controllers/getCharacterDetailById');
const { getFavorites, addFavorite, deleteFavorite } = require('../controllers/favorites'); 

router.get('/onsearch/:id', getCharacterById);
router.get('/detail/:id', getCharacterDetailById);
router.get('/favs', getFavorites);
router.post('/favs', addFavorite);
router.delete('/favs/:id', deleteFavorite);

module.exports = router;