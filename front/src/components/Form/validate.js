export default function validation (input) {
	const errors = {};
	const regexEmail = /\S+@\S+\.\S+/;
	const regexPass = /\d/;

	if (!input.username) {
		errors.username = 'El nombre de usuario no puede estar vacío'
	} else if (!regexEmail.test(input.username)) {
		errors.username = 'El nombre de usuario tiene que ser un email';
	}
	if (input.username.length > 35) {
		errors.username = 'El nombre de usuario no puede tener más de 35 caracteres';
	}
	if (!regexPass.test(input.password)) {
		errors.password = 'La contraseña contiene al menos un número';
	}
	if (input.password.length < 6 || input.password.length > 10) {
		errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres';
	}

	return errors;
}