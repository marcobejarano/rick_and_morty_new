const axios = require('axios');

const getCharacterDetailById = (req, res) => {
 	const { id } = req.params;
	return axios.get(`https://rickandmortyapi.com/api/character/${ id }`)
	    .then(response => response.data)
	    .then(data => {
	    	const { name, status, species, order, origin, image } = data;
	    	const character = { name, status, species, order, origin, image };
	    	res.status(200).send(character);
	    })
	    .catch((error) => {
	    	res.status(500).send(error.message);
	    });
};

module.exports = getCharacterDetailById;