const initialState = {
	favoriteCharacters: [],
	adjustedFavoriteCharacters: []
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	    case 'GET_FAVORITE_CHARACTERS':
	    	return {
	    		...state,
	    		adjustedFavoriteCharacters: action.payload
	    	};
	    case 'ADD_FAVORITE_CHARACTER':
	    	return {
	    		...state,
	    		favoriteCharacters: action.payload,
	    		adjustedFavoriteCharacters: action.payload
	    	};
	    case 'REMOVE_FAVORITE_CHARACTER':
	    	return {
	    		...state,
	    		favoriteCharacters: action.payload,
	    		adjustedFavoriteCharacters: action.payload
	    	};
	    case 'FILTER_FAVORITE_CHARACTERS':
	    	const filteredCopy = [...state.favoriteCharacters];
	    	const filteredFavorite = filteredCopy.filter(character => (
	    		character.gender === action.payload
	    	));

	    	return {
	    		...state,
	    		adjustedFavoriteCharacters: filteredFavorite
	    	};
	    case 'ORDER_FAVORITE_CHARACTERS':
	    	let orderedList = [];
	    	if (state.favoriteCharacters === state.adjustedFavoriteCharacters) {
	    		orderedList = [...state.favoriteCharacters];
	    	} else {
	    		orderedList = [...state.adjustedFavoriteCharacters];
	    	}
	    	
	    	if (action.payload === 'Ascendente') {
	    		orderedList.sort((a, b) => a.id - b.id);
	    	} else if (action.payload === 'Descendente') {
	    		orderedList.sort((a, b) => b.id - a.id);
	    	}

	    	return {
	    		...state,
	    		adjustedFavoriteCharacters: orderedList
	    	};
	    default:
	    	return { ...state };
	}
};