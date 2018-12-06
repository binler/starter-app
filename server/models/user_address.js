'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_address = sequelize.define('user_address', {
    user_profile_id: DataTypes.INTEGER,
    address_line_1: DataTypes.STRING,
    address_line_2: DataTypes.STRING
  }, {});
  user_address.associate = function(models) {
    // associations can be defined here
  };
  return user_address;
};