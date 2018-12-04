/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var User = sequelize.define('user', {
	id: {
		type: Sequelize.BIGINT(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	username: {
		type: Sequelize.STRING(50),
		allowNull: false,
		unique: true,
		comment: '用户名'
	},
	password: {
		type: Sequelize.STRING(50),
		allowNull: false,
		comment: '密码'
	},
	role: {
		type: Sequelize.BIGINT(11),
		allowNull: false,
		comment: '角色'
	}

}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	paranoid: true
});
//添加数据
User.sync({
	force: false
}).then(function() {
	// Table created
	return User.create({
		username: 'admin',
		password: 'admin',
		role: 1
	});
});

module.exports = User