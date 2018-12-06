'use strict';
module.exports = (Sequelize, DataTypes) => {
  const user_address = Sequelize.define('user_addresses', {
    user_profile_id: DataTypes.INTEGER,
    address_line_1: DataTypes.STRING,
    address_line_2: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  user_address.associate = function(models) {
    // associations can be defined here
  };
  return user_address;
};