import axios from 'axios';

export const getFavoriteCharacters = () => {
	return (dispatch) => {
		axios.get('http://localhost:3001/api/rickandmorty/favs')
		    .then(response => {
		    	return dispatch({
		    		type: 'GET_FAVORITE_CHARACTERS',
		    		payload: response.data
		    	});
		    })
		    .catch((error) => {
		    	console.log(error.message);
		    });
	};
};

export const addFavoriteCharacter = (character) => {
	return (dispatch) => {
		axios.post('http://localhost:3001/api/rickandmorty/favs', character)
		    .then(response => {
		    	return dispatch({
		    		type: 'ADD_FAVORITE_CHARACTER',
		            payload: response.data
		    	});
		    })
		    .catch((error) => {
		    	console.log(error.message);
		    });
		
	};
};

export const removeFavoriteCharacter = (id) => {
	return (dispatch) => {
		axios.delete(`http://localhost:3001/api/rickandmorty/favs/${ id }`)
		    .then(response => {
		    	return dispatch({
		    		type: 'REMOVE_FAVORITE_CHARACTER',
		    		payload: response.data
		    	});
		    })
		    .catch((error) => {
		    	console.log(error.message);
		    });
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