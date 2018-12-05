'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_account = sequelize.define('User_account', {
    user_profile_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    passwork: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  User_account.associate = function(models) {
    // associations can be defined here
  };
  return User_account;
};