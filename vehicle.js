const {sequelize,DataTypes, Model} = require('./db');
//const { DataTypes, Model } = require('sequelize');

class Vehicle extends Model {}

Vehicle.init({
  Name: DataTypes.STRING,  
  Make: DataTypes.STRING,
  Modle: DataTypes.STRING,
}, {
  sequelize,
  timestamps: false
})

module.exports = Vehicle;