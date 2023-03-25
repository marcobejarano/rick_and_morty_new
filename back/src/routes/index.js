const express = require('express');
const router = express.Router();
const {
	getFavorites,
	addFavorite,
	deleteFavorite,
	getAllCharacters,
	getCharacterById,
	getCharacterDetailById,
} = require('../controllers');

router.get('/onsearch/:characterId', getCharacterById);
router.get('/detail/:id', getCharacterDetailById);

router.get('/favs', getFavorites);
router.post('/favs', addFavorite);
router.delete('/favs/:id', deleteFavorite);

router.get('/all', getAllCharacters);

module.exports = router;