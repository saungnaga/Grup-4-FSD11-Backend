'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const rooms = [];
    for (let i = 1; i <= 10; i++) {
      rooms.push({
        propertyId: i,
        totalBedroom: Math.floor(Math.random() * 5) + 1,
        bedType: ['Single', 'Double', 'Queen', 'King'][Math.floor(Math.random() * 4)],
        photoURL: `http://example.com/photo${i}.jpg`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Rooms', rooms, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};