require('dotenv').config();
const app = require('./app');
const { sequelize, checkDatabaseConnection } = require('./db');
const { Character, Favorite } = require('./models');
const { saveApiData } = require('./controllers');

const { SERVER_PORT, SERVER_HOST } = process.env;

app.listen(SERVER_PORT, async () => {
	await checkDatabaseConnection();
	await sequelize.sync({ force: true });
	await saveApiData();
	console.log(`Server is running at http://${ SERVER_HOST }:${ SERVER_PORT }`);
});