import styles from './Favorites.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
	getFavoriteCharacters,
	filterFavoriteCharacters, 
	orderFavoriteCharacters 
} from '../../redux/actions';

const Favorites = () => {
	const dispatch = useDispatch();
	const adjustedFavoriteCharacters = useSelector(state => state.adjustedFavoriteCharacters);

	useEffect(() => {
		dispatch(getFavoriteCharacters());
	}, [dispatch]);

	const handleOrderChange = (e) => {
		dispatch(orderFavoriteCharacters(e.target.value));
	}

	const handleFilterChange = (e) => {
		dispatch(filterFavoriteCharacters(e.target.value));
	};

	return (
		<div className={ styles.favorites__container }>
			<div className={ styles.favorites__selects }>
			        <select onChange={ handleOrderChange } className={ styles.favorites__select }>
			            <option value='Ascendente'>Ascendente</option>
			            <option value='Descendente'>Descendente</option>
			        </select>
			        <select onChange={ handleFilterChange } className={ styles.favorites__select }>
			            <option value='Male'>Male</option>
			            <option value='Female'>Female</option>
			            <option value='Genderless'>Genderless</option>
			            <option value='unknown'>Unknown</option>
			        </select>
			    </div>
			<div className={ styles.favorites__list }>
			    { adjustedFavoriteCharacters.map(favorite => (
			    	<div key={ favorite.id } className={ styles.favorite__container }>
			    	    <img src={ favorite.image } alt={ favorite.name } className={ styles.favorite__image } />
			    	    <div className={ styles.favorite__name }>{ favorite.name }</div>
			    	</div>
			    ))}
			</div>
		</div>
	);
};

export default Favorites;