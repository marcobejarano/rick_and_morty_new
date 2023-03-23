import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import characters, { Rick } from './data';

const App = () => {
	const onClose = () => {
		window.alert('Emulamos que se cierra la card');
	};

	const onSearch = (characterId) => {
		window.alert(characterId);
	};

	const { name, species, gender, image } = Rick;

	return (
		<div>
		    <Card 
		        name={ name }
		        species={ species }
		        gender={ gender }
		        image={ image }
		        onClose={ onClose } 
		    />
		    <hr />
		    <Cards characters={ characters } onClose={ onClose } />
		    <hr />
		    <SearchBar onSearch={ onSearch } />
		</div>
	);
}

export default App;