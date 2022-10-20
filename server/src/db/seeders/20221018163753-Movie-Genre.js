'use strict';

const { movies_genres } = require('../../constants/db-movies-genres')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies_Genres', movies_genres, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies_Genres', null, {});
    
  }
};