const axios = require('axios');
const { character } = require('../DB_connection');

const getApiData = async () => {
    try {
        let allCharacters = [];
        for (let i = 1; i < 6; i++) {
            let apiData = await axios.get(`https://rickandmortyapi.com/api/character?page=${ i }`);
            const pageCharacters = apiData.data.results.map(character => {
                const { id, name, species, status, origin, gender, image } = character;
                return { id, name, species, status, origin, gender, image };
            });
            allCharacters = [...allCharacters, ...pageCharacters];
        }
        console.log(allCharacters);
        return allCharacters;  // [ {}, {}, {}... ]
        
    } catch(err) {
        return { msg: err.message }
    }
};

const saveApiData = async () => {
    try {
        const allCharacters = await getApiData();
        await character.bulkCreate(allCharacters, { individualHooks: true });
        return allCharacters;
    } catch(err) {
        return { msg: err.message }
    }
};

module.exports = saveApiData;