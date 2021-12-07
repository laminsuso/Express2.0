const {sequelize,DataTypes, Model} = require('./db');
//const { DataTypes, Model } = require('sequelize');

class Suv extends Model {}

Suv.init({
  name: DataTypes.STRING,  
  mileage: DataTypes.INTEGER,  
  price: DataTypes.STRING,
  color: DataTypes.INTEGER,
  type: DataTypes.STRING
}, {
  sequelize,
  timestamps: false
})

module.exports = Suv;