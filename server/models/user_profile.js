'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_profile = sequelize.define('user_profile', {
    id: DataTypes.INTEGER
  }, {});
  user_profile.associate = function(models) {
    // associations can be defined here
  };
  return user_profile;
};