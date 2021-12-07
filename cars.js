const {sequelize,DataTypes, Model} = require('./db');
//const { DataTypes, Model } = require('sequelize');

class Car extends Model {}

Car.init({
  name: DataTypes.STRING,  
  mileage: DataTypes.INTEGER,  
  price: DataTypes.STRING,
  color: DataTypes.INTEGER,
}, {
  sequelize,
  timestamps: false
})

module.exports = Car;