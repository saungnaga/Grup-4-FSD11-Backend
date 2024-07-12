'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // define association here
      Review.belongsTo(models.Users);
      Review.belongsTo(models.Properties);
    }
  }
  Review.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    propertyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reviewText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cleanlinessRate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accuracyRate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    checkInRate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    communicationRate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    locationRate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valueRate: {
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
    modelName: 'Review',
  });
  
  return Review;
};
