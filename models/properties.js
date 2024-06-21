'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  properties.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    photos: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
    },
    cleaningFee: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
    },
    availabilityDate: {
      type: DataTypes.INTEGER(50),
      allowNull: false,
    },
    ratingAverage: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    locationDesc: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    houseRules: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    safetyProperty: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cancellationPolicy: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    hostedDate: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
    },
    checkIn: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    checkOut: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    pets: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    parties: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    comercialPhoto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    smoking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    coAlarm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    smokeAlarm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    guestNumber: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
    },
    bedroomsNumber: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
    },
    bathsNumber: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
    },
    isFavourite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    scenicViews: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bathroom: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    laundry: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    family: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    heatingCooling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    internet: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    office: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    kitchen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    diningRoom: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    outdoor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    parking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    services: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    notIncluded: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, 
  {
    sequelize,
    modelName: 'properties',
  });
  return properties;
};