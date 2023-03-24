import axios from 'axios';

export const getFavoriteCharacters = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get('http://localhost:3001/api/rickandmorty/favs/');
			return dispatch({
	    		type: 'GET_FAVORITE_CHARACTERS',
	    		payload: response.data
	    	});
		} catch(error) {
			console.log(error.message);
		}
	};
};

export const addFavoriteCharacter = (character) => {
	return async (dispatch) => {
		try {
			const response = await axios.post('http://localhost:3001/api/rickandmorty/favs', character);
			return dispatch({
	    		type: 'ADD_FAVORITE_CHARACTER',
	            payload: response.data
	    	});
		} catch(error) {
			console.log(error.message);
		}
	};
};

export const removeFavoriteCharacter = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(`http://localhost:3001/api/rickandmorty/favs/${ id }`);
			return dispatch({
	    		type: 'REMOVE_FAVORITE_CHARACTER',
	    		payload: response.data
	    	});
		} catch(error) {
			console.log(error.message);
		}
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