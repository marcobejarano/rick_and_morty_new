require('dotenv').config();
const http = require('http');
const characters = require('./utils/data');
const getCharacterById = require('./controllers/getCharacterById');
const getCharacterDetailById = require('./controllers/getCharacterDetailById');

const host = process.env.HOST;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');

	const id = req.url.split('/').pop();

	if (req.url.includes('/api/rickandmorty/onsearch')) {
		return getCharacterById(res, id);
	}

	if (req.url.includes('/api/rickandmorty/detail')) {
		return getCharacterDetailById(res, id);
	}

	res.writeHead(404, { 'Content-Type': 'application/json' });
	return res.end('La ruta no fué encontrada');
});

server.listen(port, host, () => {
	console.log(`Server running at http://${ host }: ${ port }`);
});