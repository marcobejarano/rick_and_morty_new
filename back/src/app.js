const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
const { character } = require('./DB_connection');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/rickandmorty', router);

app.get('/rickandmorty/all', async (req, res) => {
	try {
		const allCharacters = await character.findAll();
		res.status(200).send(allCharacters);
	} catch(error) {
		res.status(400).send({ msg: error.message });
	}
});

module.exports = app;