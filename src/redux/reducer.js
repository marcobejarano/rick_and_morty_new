const initialState = {
	favoriteCharacters: []
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	    case 'ADD_FAVORITE_CHARACTER':
	    	return {
	    		...state,
	    		favoriteCharacters: [...state.favoriteCharacters, action.payload]
	    	};
	    case 'REMOVE_FAVORITE_CHARACTER':
	    	const filteredFavoriteCharacters = state.favoriteCharacters.filter(
	    		character => character.id !== action.payload
	    	);
	    	return {
	    		...state,
	    		favoriteCharacters: filteredFavoriteCharacters
	    	};
	    default:
	    	return { ...state };
	}
};