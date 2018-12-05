'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_profile = sequelize.define('user_profile', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    accept_tems_of_service: DataTypes.BOOLEAN,
    time_zone: DataTypes.STRING
  }, {});
  user_profile.associate = function(models) {
    // associations can be defined here
  };
  return user_profile;
};