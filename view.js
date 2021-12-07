const sequelize = require('./db')
const Vehicle = require('./vehicle')

const viewVehicle = [
    {
      name: 'Lamin1',
      Make: 'Mercedes‑Benz',
      Model: 'A‑Class'
    },
    {
        name: 'Lamin2',
        Make: 'Audi',
        Model: 'A3'
    },
    {
        name: 'Lamin3',
        Make: 'Hyundai',
        Model: 'Accent'
    },
    {
        name: 'Lamin4',
        Make: 'Honda',
        Model: 'Accord'
    },x
]

    const view = async () => {
        try {
         await sequelize.sync({force: true})
          await Vehicle.bulkCreate(viewVehicle, {validate: true}) 
          console.log('Viewing success!')
          sequelize.close()
        } catch (error) {
          console.log('Looks like we have an errore!: ', error)
        }
      }
      
      //Q: What is seed() returning?
      view()
          .then(() => {
            console.log('Viewing success!')
          })
          .catch(err => {
            console.error('Yes! We have an error!')
            console.error(err)
          })
