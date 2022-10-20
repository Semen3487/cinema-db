'use strict';

const { movies_actors } = require('../../constants/db-movies-actors')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies_Actors', movies_actors, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies_Actors', null, {});
    
  }
};