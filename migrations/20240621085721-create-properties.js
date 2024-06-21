'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      photos: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
      },
      cleaningFee: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
      },
      availabilityDate: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      ratingAverage: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      lon: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      lat: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      locationDesc: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      houseRules: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      safetyProperty: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cancellationPolicy: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      hostedDate: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      checkIn: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      checkOut: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      pets: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      parties: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      comercialPhoto: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      smoking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      coAlarm: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      smokeAlarm: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      guestNumber: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
      },
      bedroomsNumber: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
      },
      bathsNumber: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
      },
      isFavourite: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      scenicViews: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      bathroom: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      laundry: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      family: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      heatingCooling: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      internet: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      office: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      kitchen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      diningRoom: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      outdoor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      parking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      services: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      notIncluded: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('properties');
  }
};