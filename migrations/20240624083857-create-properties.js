'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Users",
          key:"id",
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cleaningFee: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      availabilityDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ratingAverage: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      locationDesc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      houseRules: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      safetyProperty: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cancellationPolicy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hostedDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      checkIn: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      checkOut: {
        type: Sequelize.STRING,
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
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bedroomsNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bathsNumber: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.STRING,
        allowNull: false,
      },
      notIncluded: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Properties');
  }
};