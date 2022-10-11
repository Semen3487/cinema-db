'use strict';

const { studios } = require('../../constants/db-studios')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Studios', studios, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Studios', null, {});
    
  }
};
