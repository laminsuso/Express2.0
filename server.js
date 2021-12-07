const express = require('express')
const path = require('path')

const Vehicle = require('./vehicle')
//const Cars = require('./cars')
//const Suv = require('./suvs')

const app = express
const port = 3000

app.get('./Vehicles', async(req, res) => {
    const allVehicle = await Vehicle.findAll()
    res.json (allVehicle)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})