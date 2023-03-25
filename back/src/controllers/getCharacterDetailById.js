const { Character } = require('../models');

const getCharacterDetailById = async (req, res) => {
	try {
		const { id } = req.params;
		const characterDetail = await Character.findOne({ where: { id: id } });
		const { name, status, species, gender, origin, image } = characterDetail;
	    const result = { name, status, species, gender, origin, image };
	    res.status(200).send(result);
	} catch(error) {
		res.status(500).send(error.message);
	}
};

module.exports = getCharacterDetailById;