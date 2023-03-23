import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
	const { id, name, species, gender, image, onClose } = props;

	return (
		<div className={ styles.card }>
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