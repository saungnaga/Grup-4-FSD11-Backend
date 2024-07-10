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
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
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
      },
      availabilityDateFrom: {
        type: Sequelize.STRING,
      },
      availabilityDateTo: {
        type: Sequelize.STRING,
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
      pets: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      parties: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      smoking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      coAlarm: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      smokeAlarm: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      guestNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bedroomsNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      bathsNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      scenicViews: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      bathroom: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      laundry: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      family: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      heatingCooling: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      internet: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      office: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      kitchen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      diningRoom: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      outdoor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      parking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      services: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      notIncluded: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      star: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      favorite: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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