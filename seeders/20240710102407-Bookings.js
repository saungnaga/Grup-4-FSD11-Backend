'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push({
        userID: (Math.random() * 4 + 1).toFixed(2),
        propertyID:(Math.random() * 4 + 1).toFixed(2),
        date_start:Math.floor(Date.now() / 1000),
        date_end:Math.floor(Date.now() / 1000) + 86400 * 7,
        guest_number:(Math.floor(Math.random() * 4) + 1),
      });
    }
    await queryInterface.bulkInsert("Bookings", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete("Bookings", null, {});
  }
};
