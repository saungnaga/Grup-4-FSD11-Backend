'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const Pictures = {
      apartment: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-611964103002302908/original/ede7b8fc-9f6a-40ec-8f58-45b19d941a18.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-853145771923316749/original/2edd3629-2433-4feb-a68f-504974b5994f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-31299829/original/3d4cdb14-bc70-424b-a8bf-75c45d8a4427.jpeg?im_w=960",
        "https://a0.muscache.com/im/pictures/8fa80ff2-07bf-4be3-94c2-fc7b52fb2006.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-993979849471286684/original/091ba03f-16e2-435f-b7c8-564274e2ea45.jpeg?im_w=720"
      ],
      mansion: [
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-807948064760796364/original/251641e0-b8b7-4ded-ac53-5fa2bbb335a6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-912270995409771925/original/837cbf28-6eb0-4182-9d9e-0d81254b5192.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-669063672077537352/original/24fda97a-c33c-4586-8330-44d178ca4166.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-563607006579215693/original/dc58ed57-9334-477d-9a93-8b7ca3ab0493.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1009910035312970666/original/16f0ddf4-0eac-4407-8a9f-6dd91509dd72.jpeg?im_w=720"
      ],
      cabins: [
        "https://a0.muscache.com/im/pictures/fb841d9d-8472-42e4-97dd-6eba600deef1.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-971680756471640368/original/2a418eb0-1c24-4ac8-aa3a-9f7f793d1fb7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-996343897751126368/original/6b45df7d-4b42-45d2-a766-125fdd13a4da.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-47715196/original/337f0970-f996-4b12-9e2d-157a1bcd1b2e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/7ece2877-cf88-40ca-ac16-2342347bb788.jpg?im_w=720"
      ],
      rooms: [
        "https://a0.muscache.com/im/pictures/8ee8e482-d8b5-49dc-a9ef-f59f12bb1168.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-943692597935651584/original/b4024f73-83b2-484e-840d-bacf43ef4c6b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-804497309451316843/original/c86cc8f4-6fc8-468c-9f30-33dd88417053.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-889741772373596166/original/a2a73577-3df7-41d1-a4d4-92d502bb110a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51735965/original/df97f0eb-e2a9-40c7-94ba-11c171ef5811.jpeg?im_w=720"
      ],
      tinyhomes: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/44d344d3-e0d7-423e-8067-5865ae5e7c6d.png?im_w=960",
        "https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/b18991bd-465f-49c8-bf20-97c45ea4c279.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/1b9fa206-3b6f-4af1-b4e5-c6b9df48bdb2.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/9f18742a-2820-4f7d-b04e-9d64ea1f60d0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/1514828b-b1ee-4b47-93e9-e3a77025a992.jpg?im_w=720"
      ]
    };

    const categories = Object.keys(Pictures);

    const data = [];
    for (let i = 1; i <= 25; i++) {
      for (let j = 0; j < 5; j++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const randomIndex = Math.floor(Math.random() * Pictures[category].length);
        data.push({
          url: Pictures[category][randomIndex],
          PropertyID: i,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }
    await queryInterface.bulkInsert('Images', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
