import styles from './SearchBar.module.css';

export default function SearchBar(props) {
	const { onSearch } = props;

	const handleSearch = (e) => {
		e.preventDefault();
		const characterId = e.target.search.value;
		onSearch(characterId);
		e.target.search.value = '';
	}

	return (
		<form onSubmit={ handleSearch } className={ styles.searchBarContainer }>
		    <input
		        type='text'
		        name='search'
		        className={ styles.searchBar__input }
		    />
		    <button
		        type='submit'
		        className={ styles.searchBar__button }
		    >
		        Agregar
		    </button>
		</form>
	);
}
