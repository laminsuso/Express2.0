const Car = require('./cars')
const {sequelize} = require('./db')
const Suv = require('./suvs')
const Vehicle = require('./vehicle')

const viewVehicle = [
    {
      name: 'Lamin1',
      make: 'Mercedes‑Benz',
      model: 'A‑Class'
    },
    {
      name: 'Lamin2',
      make: 'Audi',
      model: 'A3'
    },
    {
      name: 'Lamin3',
      make: 'Hyundai',
      model: 'Accent'
    },
    {
      name: 'Lamin4',
      make: 'Honda',
      model: 'Accord'
    }
]

const viewCar = [
  {
    name:'Mercedes‑Benz',
    mileage: 2000,
    price: 50000,
    color: 'Black'
  },
  {
    name:'Audi',
    mileage: 5000,
    price: 30000,
    color: 'Blue'
  },
  {
    name:'Hyundai',
    mileage: 10000,
    price: 7000,
    color: 'Red'
  },
  {
    name:'Honda',
    mileage: 20000,
    price: 3000,
    color: 'Brown'
  },
]

const viewSuv = [
  {
    name:'Mercedes‑Benz',
    mileage: 2000,
    price: 50000,
    color: 'Black',
    type: 'Sedan'
  },
  {
    name:'Audi',
    mileage: 5000,
    price: 30000,
    color: 'Blue',
    type: 'sedan'
  },
  {
    name:'Hyundai',
    mileage: 10000,
    price: 7000,
    color: 'Red',
    type: 'SUV'
  },
  {
    name:'Honda',
    mileage: 20000,
    price: 3000,
    color: 'Brown',
    type: 'SUV'
  },
]

    const view = async () => {
        try {
         await sequelize.sync({force: true})
          await Vehicle.bulkCreate(viewVehicle, {validate: true})
          await Car.bulkCreate(viewCar, {validate: true}) 
          await Suv.bulkCreate(viewSuv, {validate: true}) 
          console.log('Viewing success!')
          sequelize.close()
        } catch (error) {
          console.log('Looks like we have an errore!: ', error)
        }
      }
      
      view()
          .then(() => {
            console.log('Viewing success!')
          })
          .catch(err => {
            console.error('Yes! We have an error!')
            console.error(err)
          })
