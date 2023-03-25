const { Favorite } = require('../models');

const getFavorites = async (req, res) => {
	try {
		const allFavorites = await Favorite.findAll();
		return res.status(200).send(allFavorites);

	} catch(error) {
		console.error(error);
		res.status(500).send({ msg: 'Server error' });
	}
};

const addFavorite = async (req, res) => {
	try {
		const { id, name, gender, image } = req.body;
		if (!id || !name || !gender || !image) {
      		return res.status(400).send({ msg: 'Faltan datos para crear favoritos' });
    	}
    	const newFavorite = { id, name, gender, image };
        await Favorite.findOrCreate({
		    where: { id: newFavorite.id }, // set the where attribute
		    defaults: newFavorite // pass the newFavorite object as the defaults
		});
		const allFavorites = await Favorite.findAll();
		return res.status(200).send(allFavorites);
	} catch(error) {
		console.error(error);
		res.status(500).send({ error: 'Server error' });
	}
};

const deleteFavorite = async (req, res) => {
	try {
		const { id } = req.params;
		const favoriteToDelete = await Favorite.findByPk(id);
		if (!favoriteToDelete) {
			res.status(404).send({ error: 'Favorito no encontrado' });
		} else {
			await favoriteToDelete.destroy();
			const allFavorites = await Favorite.findAll();
		    return res.status(200).send(allFavorites);
		}
	} catch(error) {
		console.error(error);
		res.status(500).json({ error: 'Server error' });
	}
};

module.exports = { getFavorites, addFavorite, deleteFavorite };