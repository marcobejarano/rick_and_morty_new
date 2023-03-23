const axios = require('axios');

const getCharacterById = (req, res) => {
	const { id } = req.params;
	return axios.get(`https://rickandmortyapi.com/api/character/${ id }`)
	    .then(response => response.data)
	    .then(data => {
	    	const { id, name, species, gender, image } = data;
	    	const character = { id, name, species, gender, image };
	    	res.status(200).send(character);
	    })
	    .catch((error) => {
	    	res.status(500).send(error.message);
	    });
};

module.exports = getCharacterById;