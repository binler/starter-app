'use strict';
module.exports = (Sequelize, DataTypes) => {
  const User_account = Sequelize.define('user_accounts', {
    user_profile_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    passwork: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  User_account.associate = function(models) {
    // associations can be defined here
  };
  return User_account;
};