import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar(props) {
	const { onSearch } = props;

	return (
		<div className={ styles.navBarContainer }>
		    <SearchBar onSearch={ onSearch } />
		</div>
	);
}