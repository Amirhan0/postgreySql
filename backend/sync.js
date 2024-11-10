const sequelize = require('./database')
const User = require('./models/User')
const Post = require('./models/Post')

sequelize.sync({force: true}).then(() => console.log('Таблицы синхронизировалась с базой')).catch((error) => console.log('Ошибка синхронизации с базой данных', error))

