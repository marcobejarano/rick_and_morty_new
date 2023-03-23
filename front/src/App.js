import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { removeFavoriteCharacter } from './redux/actions';

const App = () => {
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();
	const username = 'marco@hotmail.com';
	const password = 'password12';

	const dispatch = useDispatch();
	const favoriteCharacters = useSelector(state => state.favoriteCharacters);

	const login = (userData) => {
		if (userData.username === username && userData.password === password) {
			setAccess(true);
			navigate('/home');
		}
	};

	const logout = () => {
		setAccess(false);
		navigate('/');
	};

	useEffect(() => {
		!access && navigate('/');
	}, [access, navigate]);

	const onClose = (id) => {
		setCharacters(characters => characters.filter(character => character.id !== id));

		const favoriteCharacter = favoriteCharacters.find(character => character.id === id);
		if (favoriteCharacter) {
			dispatch(removeFavoriteCharacter(id));
		}
	};

	const onSearch = (characterId) => {
		fetch(`http://localhost:3001/api/rickandmorty/onsearch/${characterId}`)
		    .then(response => response.json())
		    .then(data => {
		    	if (characters.some(character => character.id === data.id)) {
		    		window.alert('Ese personaje ya está agregado');
		    	} else {
		    		if (data.name) {
			    		setCharacters(oldCharacters => [...oldCharacters, data]);
			    	} else {
			    		window.alert('No hay personajes con ese Id');
			    	}
		    	}
		    })
		    .catch(err => {
		    	console.error(err);
		    	window.alert('Hubo un error al buscar el personaje');
		    });
	};

	return (
		<div>
		    {
		    	location.pathname !== '/' && <NavBar onSearch={ onSearch } logout={ logout } />
		    }
		    <Routes>
		        <Route path='/' element={ <Form login={ login } /> } />
		        <Route 
		            path='/home' 
		            element={ <Cards characters={ characters } onClose={ onClose } /> }
		        />
		        <Route path='/about' element={ <About /> } />
		        <Route path='/detail/:detailId' element={ <Detail /> } />
		        <Route path='*' element={ <NotFoundPage /> } />
		        <Route path='/favorites' element={ <Favorites /> } />
		    </Routes>
		</div>
	);
}

export default App;