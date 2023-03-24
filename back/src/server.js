require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./DB_connection');
const saveApiData = require('./controllers/saveApiData');

const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, async () => {
	await sequelize.sync({ force: true });
	await saveApiData();
	console.log(`Server is running at http://${ host }:${ port }`);
});