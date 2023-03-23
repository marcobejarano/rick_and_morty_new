const axios = require('axios');

const getCharacterDetailById = (res, id) => {
	return axios.get(`https://rickandmortyapi.com/api/character/${ id }`)
	    .then(response => response.data)
	    .then(data => {
	    	const { name, status, species, order, origin, image } = data;
	    	const character = { name, status, species, order, origin, image };
	    	res.writeHead(200, { 'Content-Type': 'application/json' });
	    	res.end(JSON.stringify(character));
	    })
	    .catch((error) => {
	    	res.writeHead(500, { 'Content-Type': 'text/plain'});
	    	res.end(error.message);
	    });
};

module.exports = getCharacterDetailById;