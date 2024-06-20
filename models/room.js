const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Room = sequelize.define('Room', {
  propertyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalBedroom: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bedType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photoURL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Room;