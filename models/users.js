'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Wishlists);
      Users.hasMany(models.Properties);
      Users.hasMany(models.Bookings);
      Users.hasMany(models.Review);
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
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: `new user ${(Math.random() * 10000).toFixed(0)}`,
      },
      photoURL: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address:{
        type : DataTypes.STRING,
        allowNull:false,
        defaultValue: 'not filled in yet',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      governmentID: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'not filled in yet',
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      EmergencyContact: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'not filled in yet',
      },
      paymentinfo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'not filled in yet',
      },
      tripHistory: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'no history',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Hello There!',
      },
      languanges: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'not filled in yet',
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