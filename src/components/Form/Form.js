import styles from './Form.module.css';
import { useState } from 'react';
import validate from './validate';

export default function Form(props) {
	const [userData, setUserData] = useState({ username: '', password: '' });
	const [errors, setErrors] = useState({username: '', password: ''});

	const { login } = props;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value
		});

		setErrors(
			validate({
				...userData,
				[name]: value
			})
		);
	}

	const handleSubmit = async (e) => {
	    e.preventDefault();
	    try {
	        await login(userData);
	    } catch (err) {
	        console.error(err);
	    }
	};

	return (
		<form onSubmit={ handleSubmit } className={ styles.formContainer }>
		    <img src='rick-morty-logo-login.jpg' alt='rick and morty' />
		    <div>
		        <label htmlFor='username'>Username: </label>
			    <input
			        type='email'
			        id='username'
			        name='username' 
			        value={ userData.username }
			        onChange={ handleInputChange }
			        className={ errors.username && styles.form__control_warning }
			    />
			    { errors.username && <p className={ styles.form__control_danger }>{ errors.username }</p>}
		    </div>
		    <div>
			    <label htmlFor='password'>Password: </label>
			    <input 
			        type='password'
			        id='password' 
			        name='password' 
			        value={ userData.password }
			        onChange={ handleInputChange }
			        className={ errors.password && styles.form__control_warning }
			    />
			    { errors.password && <p className={ styles.form__control_danger }>{ errors.password }</p>}
			</div>
			<div>
		        <button 
		            type='submit' 
		            className={ styles.form__button } 
		            disabled={ !userData.username || 
		                !userData.password || 
		                errors.username || 
		                errors.password 
		            }
		        >
		            LOGIN
		        </button>
		    </div>
		</form>
	);
}