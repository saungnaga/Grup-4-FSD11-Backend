"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      photoURL: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      address:{
        type : DataTypes.STRING(100),
        allowNull:false,
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      governmentID: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      EmergencyContact: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      paymentinfo: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      wishlist: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      tripHistory: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      messages: {
        type: DataTypes.STRING(20),
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
      modelName: "Users",
    }
  );
  return Users;
};
