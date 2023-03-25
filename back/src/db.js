require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
	POSTGRES_USER, 
	POSTGRES_PASSWORD, 
	POSTGRES_DB, 
	POSTGRES_HOST
} = process.env;

const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: POSTGRES_HOST,
    dialect: 'postgres',
    logging: false
});

const checkDatabaseConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
	    console.error('Unable to connect to the database:', error);
	}
}

module.exports = { sequelize, checkDatabaseConnection };