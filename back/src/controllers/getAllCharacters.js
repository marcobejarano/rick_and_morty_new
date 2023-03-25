const { Character } = require('../models');

const getAllCharacters = async (req, res) => {
	try {
		const allCharacters = await Character.findAll();
		res.status(200).send(allCharacters);
	} catch(error) {
		res.status(500).send({ msg: 'Server error' });
	}
};

module.exports = getAllCharacters;