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
    const countries = [
      "United States",
      "Canada",
      "Mexico",
      "Brazil",
      "United Kingdom",
      "France",
      "Germany",
      "Italy",
      "Spain",
      "Russia",
      "China",
      "Japan",
      "India",
      "Australia",
      "South Africa"
    ];
    const data = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      data.push({
        name: "User" + i,
        email: "email" + i + "@example.com",
        password: "password" + i,
        phone: i,
        photoURL: "https://www.img.com/" + i,
        address: "Street" + i,
        governmentID: i,
        EmergencyContact: i + "" + i,
        paymentinfo: "3061" + i,
        tripHistory: "",
        description: "Description " + i,
        languanges: countries[randomIndex],
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
