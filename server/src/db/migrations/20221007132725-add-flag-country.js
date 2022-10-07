'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Countries', 'flag',{ type: Sequelize.TEXT });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Countries', 'flag');
    
  }
};
