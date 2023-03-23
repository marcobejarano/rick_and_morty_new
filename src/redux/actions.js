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