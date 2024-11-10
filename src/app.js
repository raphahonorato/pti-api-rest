const express = require('express')
const morgan = require('morgan')
const app = express()

const bodyParser = require('body-parser')
const productsRoutes = require('./routes/productsRoutes')

app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/produto', productsRoutes);

module.exports = app