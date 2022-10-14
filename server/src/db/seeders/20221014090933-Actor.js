'use strict';

const { actors } = require('../../constants/db-actors')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Actors', actors, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Actors', null, {});
    
  }
};