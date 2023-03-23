import styles from './Card.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCharacter, removeFavoriteCharacter } from '../../redux/actions';

const Card = (props) => {
	const { id, name, species, gender, image, onClose } = props;

	const [isFav, setIsFav] = useState(false);

	const dispatch = useDispatch();
	const favoriteCharacters = useSelector(state => state.favoriteCharacters);

	const handleFavoriteCharacters = () => {
		if (isFav) {
			setIsFav(false);
			dispatch(removeFavoriteCharacter(id));
		} else {
			setIsFav(true);
			dispatch(addFavoriteCharacter(props));
		}
	};

	useEffect(() => {
		favoriteCharacters.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [favoriteCharacters, id]);

	return (
		<div className={ styles.card }>
		    {
		    	isFav ? (
		    		<img src='red-heart.png' alt='red-heart' onClick={ handleFavoriteCharacters } className={ styles.card__button_favorite } />
		    	) : (
		    	    <img src='white-heart.png' alt='white-heart' onClick={ handleFavoriteCharacters } className={ styles.card__button_favorite } />
		    	)
		    }
		    <button onClick={ onClose } className={ styles.card__button }>X</button>
		    <div className={ styles.card__name }>{ name }</div>
		    <Link to={ `/detail/${ id }` }>
		        <img src={ image } alt={ name } className={ styles.card__image} />
		    </Link>
		    <div className={ styles.card__speciesGender }>
		        <div className={ styles.card__species }>Species: { species }</div>
		        <div className={ styles.card__gender }>Gender: { gender }</div>
		    </div>
		</div>
	);
}

export default Card;