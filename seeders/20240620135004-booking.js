'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bookings = [];

    for (let i = 0; i < 30; i++) {
      bookings.push({
        user_id: i + 1,
        property_id: i + 1,
        date_start: new Date(),
        date_end: new Date(),
        guest_number: Math.floor(Math.random() * 5) + 1,
        booking_message: `Tidak pakai bantal ${i + 1}`,
      });
    }

    await queryInterface.bulkInsert('Bookings', bookings, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};


