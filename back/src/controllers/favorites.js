let favs = require('../utils/favs');

// GET /api/rickandmorty/favs
const getFavorites = (req, res) => {
	try {
		res.status(200).send(favs);
	} catch(error) {
		console.error(error);
		res.status(500).send('Server error');
	}
};

// POST /api/rickandmorty/favs
const addFavorite = (req, res) => {
	try {
		const character = req.body;
		favs.push(character);
		res.status(201).send(favs);
	} catch(error) {
		console.error(error);
		res.status(500).send('Server error');
	}
};

// DELETE /api/rickandmorty/favs
const deleteFavorite = (req, res) => {
	try {
		const { id } = req.params;
		favs = favs.filter(favorite => favorite.id !== Number(id));
		res.status(200).send(favs);
	} catch(error) {
		console.error(error);
		res.status(500).send('Server error');
	}
};

module.exports = { getFavorites, addFavorite, deleteFavorite };