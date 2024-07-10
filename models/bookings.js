'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    static associate(models) {
      // define association here
      Bookings.belongsTo(models.Users);
      Bookings.belongsTo(models.Properties);
    }
  }
  Bookings.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    propertyID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_start: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_end: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    guest_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Bookings',
  });
  
  return Bookings;
};
