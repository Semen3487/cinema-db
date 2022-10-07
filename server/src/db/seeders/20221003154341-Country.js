'use strict';

/** @type {import('sequelize-cli').Migration} */

const countries = [];
for(let i = 0; i < 10; i++){
  countries.push({
    title: `Country ${i}`
    // createdAt: new Date(),
    // updatedAt: new Date()
  })
}
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Countries', countries, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Countries', null, {});
    
  }
};
