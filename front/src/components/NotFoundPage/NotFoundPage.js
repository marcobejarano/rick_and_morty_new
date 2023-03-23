import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<div className={ styles.notFoundPageContainer }>
		    <Link to="/home" className={ styles.notFoundPage__button }>Go Back</Link>
		    <h3>Lo siento, la página que trató de acceder no existe</h3>
		    <img src="/404.jpg" alt="404 Not Found" className={ styles.notFoundPage__image } />
		</div>
	);
}