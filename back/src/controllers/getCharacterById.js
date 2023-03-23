const axios = require('axios');

const getCharacterById = (res, id) => {
	return axios.get(`https://rickandmortyapi.com/api/character/${ id }`)
	    .then(response => response.data)
	    .then(data => {
	    	const { id, name, species, gender, image } = data;
	    	const character = { id, name, species, gender, image };
	    	res.writeHead(200, { 'Content-Type': 'application/json' });
	    	res.end(JSON.stringify(character));
	    })
	    .catch((error) => {
	    	res.writeHead(500, { 'Content-Type': 'text/plain' });
	    	res.end(error.message);
	    });
};

module.exports = getCharacterById;