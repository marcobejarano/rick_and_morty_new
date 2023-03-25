const axios = require('axios');
const { Character } = require('../models');

const apiUrl = 'https://rickandmortyapi.com/api/character';

const getApiData = async (apiUrl, page = 1, characters = []) => {
	try {
		const response = await axios.get(`${ apiUrl }?page=${ page }`);
		const { results } = response.data;
		const formattedResults = results.map(character => {
			const { id, name, species, status, origin, gender, image } = character;
			return { id, name, species, status, origin, gender, image };
		});
		const combinedCharacters = [...characters, ...formattedResults];
		if (combinedCharacters.length < 100) {
			const nextPage = page + 1;
			return getApiData(apiUrl, nextPage, combinedCharacters);
		} else {
			return combinedCharacters.slice(0, 100);
		}
	} catch(error) {
		console.error(error);
	}
};

const saveApiData = async () => {
	try {
		const characters = await getApiData(apiUrl);
		await Character.bulkCreate(characters, { ignoreDuplicates: true });
		return characters;
	} catch(error) {
		return { msg: error.message };
	}
};

module.exports = saveApiData;