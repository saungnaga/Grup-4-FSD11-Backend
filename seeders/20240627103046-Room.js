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
    for (let i = 0; i < 20; i++) {
      data.push({
        id: i,
        roomNumber: Math.floor(Math.random() * 5) + 1,
        bedTypeDesc: ['Queen', 'King', 'King & Queen', 'King, Queen & Single', 'Queen & Single', 'King & Single'][Math.floor(Math.random() * 6)],
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
