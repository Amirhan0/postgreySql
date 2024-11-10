const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false
})


sequelize.authenticate().then(() => console.log('Успешное подключение к базе данных с помощью Sequelize')).catch((error) => console.log('Ошибка', error))

module.exports = sequelize