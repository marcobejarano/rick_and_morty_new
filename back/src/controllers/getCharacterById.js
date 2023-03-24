const axios = require('axios');

const getCharacterById = async (req, res) => {
	try {
		const { characterId } = req.params;
		const response = await axios.get(`https://rickandmortyapi.com/api/character/${ characterId }`);
		const data = response.data;
		const { id, name, species, gender, image } = data;
		const character = { id, name, species, gender, image };
		res.status(200).send(character);
	} catch(error) {
		res.status(500).send(error.message);
	}
};

module.exports = getCharacterById;