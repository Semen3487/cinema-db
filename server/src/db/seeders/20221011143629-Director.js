'use strict';

const { directors } = require('../../constants/db-directors')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Directors', directors, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Directors', null, {});
    
  }
};