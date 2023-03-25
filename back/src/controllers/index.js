const { getFavorites, addFavorite, deleteFavorite } = require('./favoritesController');
const getAllCharacters = require('./getAllCharacters');
const getCharacterById = require('./getCharacterById');
const getCharacterDetailById = require('./getCharacterDetailById');
const saveApiData = require('./saveApiData');

module.exports = {
	getFavorites,
	addFavorite,
	deleteFavorite,
	getAllCharacters,
	getCharacterById,
	getCharacterDetailById,
	saveApiData
};