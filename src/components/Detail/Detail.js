import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Detail.module.css';

const Detail = () => {
	const [character, setCharacter] = useState({});
	const { detailId } = useParams();

	const { name, status, species, gender, origin, image } = character;

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
		    .then(res => res.json())
		    .then(data => {
		    	if (data.name) {
		    		setCharacter(data);
		    	} else {
		    		window.alert('No hay personajes con ese Id');
		    	}
		    })
		    .catch(err => {
		    	window.alert('Hubo un error al buscar el personaje');
		    });

		return setCharacter({}); 
	}, [detailId]);

	return (
		<div className={ styles.detailsContainer }>
		    <Link to="/home" className={ styles.detailsContainer__button }>Go Back</Link>
		    <div className={ styles.details }>
		        <div className={ styles.details__info }>
			        <div className={ styles.details__info_title }>Name: { name }</div>
			        <div className={ styles.details__info_description }>Status: { status }</div>
			        <div className={ styles.details__info_description }>Species: { species }</div>
			        <div className={ styles.details__info_description }>Gender: { gender }</div>
			        <div className={ styles.details__info_description }>Origin: { origin && origin.name }</div>
			    </div>
			    <img src={ image } alt={ name } className={ styles.details__image } />
		    </div>  
		</div>
	);
};

export default Detail;