require('dotenv').config();
const session = require('supertest');
const app = require('../app');
const agent = session(app);

const host = process.env.HOSTNAME;
const port = process.env.PORT;

describe('Route: GET /api/rickandmorty/onsearch/:id', () => {
	it('Responde con status: 200', async () => {
		const response = await agent.get('/api/rickandmorty/onsearch/1');
		expect(response.statusCode).toBe(200);
	});

	it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
		const expectedProps = ['id', 'name', 'species', 'gender', 'image'];
		const response = await agent.get('/api/rickandmorty/onsearch/1');
		const characterInfo = response.body;
		expect(Object.keys(characterInfo)).toEqual(expectedProps);
	});

	it('Si hay un error responde con status: 500', () => {
		return agent
		    .get('/api/rickandmorty/onsearch/10000')
		    .send()
		    .then(response => expect(response.statusCode).toBe(500));
	});
});

describe('Route: GET /api/rickandmorty/detail/:id', () => {
	it('Responde con status 200', async () => {
		const response = await agent.get('/api/rickandmorty/detail/1');
		expect(response.statusCode).toBe(200);
	});

	it('Responde un objeto con las propiedad: "name", "status", "species", "gender", "origin", "image"', async () => {
		const expectedProps = ['name', 'status', 'species', 'gender', 'origin', 'image'];
		const response = await agent.get('/api/rickandmorty/detail/1');
		const characterDetail = response.body;
		console.log(characterDetail);
		expect(Object.keys(characterDetail)).toEqual(expectedProps);
	});

	it('Si hay un error responde con status: 500', () => {
		return agent
		    .get('/api/rickandmorty/detail/10000')
		    .send()
		    .then(response => expect(response.statusCode).toBe(500));
	});
});

describe('Route: GET /api/rickandmorty/favs', () => {
	it('Responde con status 200', async () => {
		const response = await agent.get('/api/rickandmorty/favs');
		expect(response.statusCode).toBe(200);
	});
});

describe('Route: POST /api/rickandmorty/favs', () => {
  it('Responde con status 201 y agrega el personaje favorito', async () => {
    const newFav = {
      id: 1,
      name: 'Rick Sanchez',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    };
    const response = await agent.post('/api/rickandmorty/favs').send(newFav);
    expect(response.statusCode).toBe(201);
    expect(response.body).toContainEqual(newFav);
  });
});

describe('Route: DELETE /api/rickandmorty/favs/1', () => {
	it('Debe eliminar a un personaje favorito y responder con stastus 200', async () => {
	    const newCharacter = { id: 1, name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' };
	    let favs = [];
	    favs.push(newCharacter);

	    const response = await agent.delete(`/api/rickandmorty/favs/${newCharacter.id}`);

	    expect(response.statusCode).toBe(200);

	    const remainingCharacters = favs.filter(favorite => favorite.id !== newCharacter.id);
	    expect(response.body).toEqual(remainingCharacters);
	});
});




