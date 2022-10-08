'use strict';
const { genres } = require('../../constants/db-genres');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', genres, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genres', null, {});
    
  }
};
