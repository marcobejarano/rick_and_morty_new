import styles from './Favorites.module.css';
import { useSelector } from 'react-redux';

const Favorites = () => {
	const favoriteCharacters = useSelector(state => state.favoriteCharacters);

	return (
		<div className={ styles.favorites__container }>
		    { favoriteCharacters.map(myFavorite => (
		    	<div key={ myFavorite.id } className={ styles.favorite__container }>
		    	    <img src={ myFavorite.image } alt={ myFavorite.name } className={ styles.favorite__image } />
		    	    <div className={ styles.favorite__name }>{ myFavorite.name }</div>
		    	</div>
		    ))}
		</div>
	);
};

export default Favorites;