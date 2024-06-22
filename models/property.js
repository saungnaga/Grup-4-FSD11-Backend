'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      Property.belongsToMany(models.RoomDetails, {
        through: 'room_property_associations',
        foreignKey: 'property_id'
      });
    }
  }
  Property.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Property',
    tableName: 'properties',
    timestamps: true,
    underscored: true
  });
  return Property;
};