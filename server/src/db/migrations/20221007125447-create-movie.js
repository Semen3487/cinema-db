'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      release_date: {
        type: Sequelize.DATEONLY
      },
      genre_id: {
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER
      },
      studio_id: {
        type: Sequelize.INTEGER
      },
      director_id: {
        type: Sequelize.INTEGER
      },
      actor_id: {
        type: Sequelize.INTEGER
      },
      poster: {
        type: Sequelize.TEXT
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};