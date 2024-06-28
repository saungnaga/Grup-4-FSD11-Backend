'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        propertyId: 1,
        userId: 1,
        reviewText: 'Great place!',
        cleanlinessRate: 5,
        accuracyRate: 4,
        checkInRate: 5,
        communicationRate: 4,
        locationRate: 5,
        valueRate: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        propertyId: 1,
        userId: 2,
        reviewText: 'Nice and cozy.',
        cleanlinessRate: 4,
        accuracyRate: 4,
        checkInRate: 4,
        communicationRate: 5,
        locationRate: 4,
        valueRate: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
