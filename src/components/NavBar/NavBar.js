import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (props) => {
	const { onSearch, logout } = props;

	return (
		<div className={ styles.navBarContainer }>
		    <div className={ styles.navBar__buttons }>
			    <NavLink to='/home'>
			        <button className={ styles.navBar__button }>Home</button>
			    </NavLink>
			    <NavLink to='/about'>
			        <button className={ styles.navBar__button }>About</button>
			    </NavLink>
			    <button onClick={ logout } className={ styles.navBar__button }>Logout</button>
			</div>
		    <SearchBar onSearch={ onSearch } />
		</div>
	);
};

export default NavBar;