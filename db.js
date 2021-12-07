const {Sequelize, DataTypes, Model} = require('sequelize')
const path = require('path')

//create sequelize connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'Vehicle.sqlite')
})

//export connection
module.exports = {sequelize, DataTypes, Model}