const express = require('express')
const path = require('path')

const Vehicle = require('./vehicle')
const Car = require('./cars')
const Suv = require('./suvs')
//const Suv = require('./suvs')

const app = express()
const port = 3000
app.use(express.json())


app.post('/vehicles', async(req,res) =>{
    let newVehicle = await Vehicle.create(req.body)
    res.send(newVehicle? "Vehicle Created": "Vehicle creat Failed!")
})

app.get('/vehicles', async(req, res) => {
    const allVehicle = await Vehicle.findAll()
    res.json (allVehicle)
})

app.get('/vehicles/:id', async(req, res) => {
    const thisVehicle = await Vehicle.findByPk(req.params.id)
    res.json (thisVehicle)
})

app.put('/vehicles/:id', async(req,res)=>{
    let updatedVehicles = await Vehicle.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedVehicles ? "Vehicle Updated" : "Vehicle update failed!")
})

app.delete('/vehicles/:id', async(req, res)=>{
    const deleted = await Vehicle.destroy({
        where: {id: req.params.id}
    })
    res.send(deleted? "Vehicle deleted" : "Vehicle delition failed!")
})

app.post('/cars', async(req,res) =>{
    let newCar = await Car.create(req.body)
    res.send(newCar? "Car Created": "Car create Failed!")
})

app.get('/cars', async(req, res) => {
    const allCars = await Car.findAll()
    res.json (allCars)
})

app.get('/car/:id', async(req, res) => {
    const thisCar = await Car.findByPk(req.params.id)
    res.json (thisCar)
})

app.put('/cars/:id', async(req,res)=>{
    let updatedCar = await Car.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedCar ? "Car Updated" : "Car update failed!")
})

app.delete('/cars/:id', async(req, res)=>{
    const deleted = await Car.destroy({
        where: {id: req.params.id}
    })
    res.send(deleted? "Car deleted" : "Car delition failed!")
})

app.post('/suvs', async(req,res) =>{
    let newSuv = await Suv.create(req.body)
    res.send(newSuv? "Suv Created": "Suv create Failed!")
})

app.get('/suvs', async(req, res) => {
    const allSuvs = await Suv.findAll()
    res.json (allSuvs)
})

app.get('/suvs/:id', async(req, res) => {
    const thisSuv = await Suv.findByPk(req.params.id)
    res.json (thisSuv)
})

app.get('/suvs/:name', async(req, res) => {
    const thisSuvsName = await Suv.findOne({where:{name: req.params.name}})
    res.json (thisSuvsName)
})

app.put('/suvs/:id', async(req,res)=>{
    let updatedSuv = await Suv.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedSuv ? "Suv Updated" : "Suv update failed!")
})

app.delete('/suvs/:id', async(req,res)=>{
    let deleted = await Suv.destroy({
        where: {id: req.params.id}
    })

    res.send(deleted? "Suv deleted" : "Suv delete failed")
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})