'use strict';

const { Review } = require('../models');
const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const reviews = [];

    for (let i = 0; i < 100; i++) {
      reviews.push({
        propertyId: Math.floor(Math.random() * 25) + 1,
        userId: Math.floor(Math.random() * 5) + 1,
        reviewText: faker.lorem.sentences(),
        cleanlinessRate: faker.datatype.float({ min: 1, max: 5 }),
        accuracyRate: faker.datatype.float({ min: 1, max: 5 }),
        checkInRate: faker.datatype.float({ min: 1, max: 5 }),
        communicationRate: faker.datatype.float({ min: 1, max: 5 }),
        locationRate: faker.datatype.float({ min: 1, max: 5 }),
        valueRate: faker.datatype.float({ min: 1, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Reviews', reviews, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};
