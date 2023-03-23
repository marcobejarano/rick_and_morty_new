require('dotenv').config();
const http = require('http');
const characters = require('./utils/data');

const host = process.env.HOST;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');

	if (req.url.includes('/api/rickandmorty/character')) {
		const id = req.url.split('/').pop();
		const character = characters.find(character => character.id === Number(id));

		res.writeHead(200, { 'Content-Type': 'application/json' });
		return res.end(JSON.stringify(character));
	}

	res.writeHead(404, { 'Content-Type': 'application/json' });
	return res.end(JSON.stringify({ error: 'El personaje no está' }));
});

server.listen(port, host, () => {
	console.log(`Server running at http://${ host }: ${ port }`);
});