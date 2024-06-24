"use strict";

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
    for (let i = 0; i < 10; i++) {
      data.push({
        name: "User" + i,
        email: "email" + i + "@example.com",
        password: "password" + i,
        phone: i,
        photoURL:"https://www.img.com/"+i, 
        address:"Street"+i, 
        governmentID:i, 
        EmergencyContact:i+""+i, 
        paymentinfo:"3061"+i, 
        tripHistory:"",
        // signUpdate:Date.now(),
      });
    }

    await queryInterface.bulkInsert("Users", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null, {});
  },
};
