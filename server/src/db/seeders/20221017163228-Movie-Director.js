'use strict';

const { movies_directors } = require('../../constants/db-movies-directors')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies_Directors', movies_directors, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies_Directors', null, {});
    
  }
};