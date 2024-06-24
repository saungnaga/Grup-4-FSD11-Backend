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
    for (let i = 0; i < 10; i++) {
      data.push({
        name: "User" + i,
        photos: "https://www.img.com/photo" + i,
        description: "Description of listing " + i,
        price: i * 100,
        cleaningFee: i * 10,
        availabilityDate: Date.now(),
        ratingAverage: (Math.random() * 5).toFixed(2),
        type: "Type" + i,
        lon: (Math.random() * 180 - 90).toFixed(6),
        lat: (Math.random() * 360 - 180).toFixed(6),
        address: "Street" + i,
        country: "Country" + i,
        locationDesc: "Location description " + i,
        houseRules: "House rules " + i,
        safetyProperty: "Safety features " + i,
        cancellationPolicy: "Cancellation policy " + i,
        hostedDate: Date.now(),
        checkIn: "Check-in time " + i,
        checkOut: "Check-out time " + i,
        pets: Math.random() > 0.5,
        parties: Math.random() > 0.5,
        comercialPhoto: Math.random() > 0.5,
        smoking: Math.random() > 0.5,
        coAlarm: Math.random() > 0.5,
        smokeAlarm: Math.random() > 0.5,
        guestNumber: i + 1,
        bedroomsNumber: i + 1,
        bathsNumber: i + 1,
        isFavourite: Math.random() > 0.5,
        scenicViews: Math.random() > 0.5,
        bathroom: Math.random() > 0.5,
        laundry: Math.random() > 0.5,
        family: Math.random() > 0.5,
        heatingCooling: Math.random() > 0.5,
        internet: Math.random() > 0.5,
        office: Math.random() > 0.5,
        kitchen: Math.random() > 0.5,
        diningRoom: Math.random() > 0.5,
        outdoor: Math.random() > 0.5,
        parking: Math.random() > 0.5,
        services: "Services " + i,
        notIncluded: "Not included " + i,
      });
    }
    await queryInterface.bulkInsert("Properties", data);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Properties", null, {});
  }
};
