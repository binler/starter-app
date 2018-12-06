'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_account = sequelize.define('user_account', {
    user_profile_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  user_account.associate = function(models) {
    // associations can be defined here
  };
  return user_account;
};