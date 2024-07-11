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
    const Type = [
      "Tiny Homes",
      "Cabins",
      "Apartments",
      "Mansions",
      "Rooms"
    ];
    const Country = [
      "Belize",
      "Estonia",
      "China",
      "France",
      "Indonesia",
      "Vietnam",
      "Russia",
      "Colombia",
      "Argentina",
      "Austria",
      "Poland",
      "Kazakhstan",
      "Philippines",
      "Germany"
  ];

    const data = [];
    for (let i = 0; i < 25; i++) {
      const randomIndex = Math.floor(Math.random() * Type.length);
      const randomIndexCountry = Math.floor(Math.random()*Country.length);
      data.push({
        userID: (Math.floor(Math.random() * 4) + 1),
        address: "Street " + (i+1),
        country: Country[randomIndexCountry],
        description: "Description of listing " + i,
        price: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        cleaningFee: i * 10,
        availabilityDateFrom: Math.floor(Date.now() / 1000),
        availabilityDateTo: Math.floor(Date.now() / 1000) + 86400 * 7, // 7 days later
        type: Type[randomIndex],
        lon: (Math.random() * 180 - 90).toFixed(6),
        lat: (Math.random() * 360 - 180).toFixed(6),
        locationDesc: "Location description " + i,
        houseRules: "House rules " + i,
        safetyProperty: "Safety features " + i,
        cancellationPolicy: "Cancellation policy " + i,
        hostedDate: Date.now(),
        pets: Math.random() > 0.5,
        parties: Math.random() > 0.5,
        smoking: Math.random() > 0.5,
        coAlarm: Math.random() > 0.5,
        smokeAlarm: Math.random() > 0.5,
        guestNumber: i + 1,
        bedroomsNumber: i + 1,
        bathsNumber: i + 1,
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
        star: (Math.random() * 5).toFixed(2),
        favorite: Math.random() > 0.5,
      });
    }
    await queryInterface.bulkInsert("Properties", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Properties", null, {});
  }
};
