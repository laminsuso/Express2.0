const {sequelize,DataTypes, Model} = require('./db');
//const { DataTypes, Model } = require('sequelize');

class Vehicle extends Model {}

Vehicle.init({
  name: DataTypes.STRING,  
  make: DataTypes.STRING,
  model: DataTypes.STRING,
}, {
  sequelize,
  timestamps: false
})

module.exports = Vehicle;