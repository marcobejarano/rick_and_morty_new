import styles from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = (props) => {
	const [characterId, setCharacterId] = useState('');
	const { onSearch } = props;

	const handleCharacterIdChange = (e) => {
		setCharacterId(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		onSearch(characterId);
	};

	const handleRandomSearch = () => {
		onSearch(Math.floor(Math.random() * 826) + 1);
	};

	return (
		<form onSubmit={ handleSearch } className={ styles.searchBarContainer }>
		    <input
		        type='text'
		        name='search'
		        className={ styles.searchBar__input }
		        onChange={ handleCharacterIdChange }
		    />
		    <button
		        type='submit'
		        className={ styles.searchBar__button }
		    >
		        Agregar
		    </button>
		    <button
		        type='button'
		        onClick={ handleRandomSearch }
		        className={ styles.searchBar__button }
		    >
		        Buscar Random
		    </button>
		</form>
	);
};

export default SearchBar;
