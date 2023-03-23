export const getFavoriteCharacters = () => {
	return {
		type: 'GET_FAVORITE_CHARACTERS'
	}
}

export const addFavoriteCharacter = (character) => {
	return {
		type: 'ADD_FAVORITE_CHARACTER',
		payload: character
	};
};

export const removeFavoriteCharacter = (id) => {
	return {
		type: 'REMOVE_FAVORITE_CHARACTER',
		payload: id
	};
};

export const filterFavoriteCharacters = (gender) => {
	return {
		type: 'FILTER_FAVORITE_CHARACTERS',
		payload: gender
	};
};

export const orderFavoriteCharacters = (id) => {
	return {
		type: 'ORDER_FAVORITE_CHARACTERS',
		payload: id
	};
};