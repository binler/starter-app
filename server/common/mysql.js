/*Sequelize mysql*/
const config = require('../../config/config');
let Sequelize = require('sequelize');

let sequelize = new Sequelize(
	config.mysql.database,
	config.mysql.username,
	config.mysql.password, {
		host: config.mysql.host,
		dialect: 'mysql'
	}
);

module.exports = sequelize;