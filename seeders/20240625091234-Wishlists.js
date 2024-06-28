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
        PropertyID:(Math.random() * 4 + 1).toFixed(2),
      });
    }
    await queryInterface.bulkInsert("Wishlists", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete("Wishlists", null, {});
  }
};
