'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoomDetail extends Model {
    static associate(models) {
      RoomDetail.belongsTo(models.Property, {
        foreignKey: 'property_id',
        onDelete: 'CASCADE',
      });
    }
  }
  RoomDetail.init(
    {
      room_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      property_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bedType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roomNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      photoURL: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'RoomDetail',
      tableName: 'roomdetails',
    }
  );
  return RoomDetail;
};