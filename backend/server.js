const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const { Client } = require('pg')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
dotenv.config()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const client = new Client({
    connectionString: process.env.DATABASE_URL
})

client.connect()
  .then(() => {
    console.log('Подключение к базе данных PostgreSQL успешно!');
  })
  .catch((err) => {
    console.error('Ошибка при подключении к базе данных:', err);
  });


app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

app.listen(PORT, () => {
    console.log('sup server')
})