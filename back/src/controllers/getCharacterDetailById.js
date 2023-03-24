const axios = require('axios');

const getCharacterDetailById = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await axios.get(`https://rickandmortyapi.com/api/character/${ id }`)
		const data = response.data;
		const { name, status, species, gender, origin, image } = data;
	    const character = { name, status, species, gender, origin, image };
	    res.status(200).send(character);
	} catch(error) {
		res.status(500).send(error.message);
	}
};

module.exports = getCharacterDetailById;