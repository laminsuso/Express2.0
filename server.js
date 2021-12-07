const express = require('express')
const path = require('path')

const Vehicle = require('./vehicle')
const Car = require('./cars')
const Suv = require('./suvs')
//const Suv = require('./suvs')

const app = express()
const port = 3000



app.get('/vehicles', async(req, res) => {
    const allVehicle = await Vehicle.findAll()
    res.json (allVehicle)
})

app.get('/cars', async(req, res) => {
    const allCars = await Car.findAll()
    res.json (allCars)
})

app.get('/suvs', async(req, res) => {
    const allSuvs = await Suv.findAll()
    res.json (allSuvs)
})

// app.get('/vehicles/:id', async(req, res) => {
//     const thisVehicle = await Vehicle.findByPk(req.params.id)
//     res.json (thisVehicle)
// })

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})