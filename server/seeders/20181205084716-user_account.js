'use strict';
var crypto = require('crypto');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('user_accounts', [{
      user_profile_id: 1,
      user_name: 'admin',
      email: 'admin@gmail.com',
      password: 'admin',
      status: 1,
      createdAt: Date.now()
    },
    {
      user_profile_id: 2,
      user_name: 'admin1',
      email: 'admin@gmail.com',
      password: crypto.createHash('sha256').update('123').digest('hex'),
      status: 1,
      createdAt: Date.now()
    }], { freezeTableName: true});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('user_accounts', null, {});
  }
};
