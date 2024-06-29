'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
        PropertyID:(Math.random() * 4 + 1).toFixed(2),
        bedType: ['Queen', 'King', 'Single', 'Double'][Math.floor(Math.random() * 4)],
        photoURL: `test${i}.url`,
      })
    }

   await queryInterface.bulkInsert("Rooms", data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Rooms", null, {})
  }
};
