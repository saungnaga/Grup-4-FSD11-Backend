'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      propertyId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      reviewText: {
        type: Sequelize.TEXT
      },
      cleanlinessRate: {
        type: Sequelize.INTEGER
      },
      accuracyRate: {
        type: Sequelize.INTEGER
      },
      checkInRate: {
        type: Sequelize.INTEGER
      },
      communicationRate: {
        type: Sequelize.INTEGER
      },
      locationRate: {
        type: Sequelize.INTEGER
      },
      valueRate: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};