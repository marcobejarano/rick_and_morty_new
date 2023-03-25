const { Character } = require('../models');

const getCharacterById = async (req, res) => {
	try {
		const { characterId } = req.params;
		const character = await Character.findOne({ where: { id: characterId } });
		if (!character) {
			return res.status(404).send({ msg: 'El personaje no fue encontrado' });
		}
		const { id, name, species, gender, image } = character;
		const result = { id, name, species, gender, image };
		res.status(200).send(result);
	} catch(error) {
		res.status(500).send(error.message);
	}
};

module.exports = getCharacterById;