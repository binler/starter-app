'use strict';
module.exports = (Sequelize, DataTypes) => {
  const user_profile = Sequelize.define('user_profiles', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    accept_tems_of_service: DataTypes.BOOLEAN,
    time_zone: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  user_profile.associate = function(models) {
    // associations can be defined here
  };
  return user_profile;
};