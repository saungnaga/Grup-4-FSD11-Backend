'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Properties.hasMany(models.Wishlists);
      Properties.hasMany(models.Images);
      Properties.belongsTo(models.Users);
      Properties.hasMany(models.Rooms);
      Properties.hasMany(models.Bookings);
      Properties.hasMany(models.Review);
    }
  }
  Properties.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cleaningFee: {
        type: DataTypes.INTEGER,
      },
      availabilityDateFrom: {
        type: DataTypes.STRING,
      },
      availabilityDateTo: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
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
      locationDesc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      houseRules: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      safetyProperty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cancellationPolicy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hostedDate: {
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bedroomsNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,        
      },
      bathsNumber: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      notIncluded: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      star: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      favorite: {
        type: DataTypes.BOOLEAN,
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
    }, {
    sequelize,
    modelName: 'Properties',
  });
  return Properties;
};