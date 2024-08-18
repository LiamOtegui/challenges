const express = require('express')
const app = express()
const cors = require('cors')
const router = require('../src/routes/index')
const errorMiddleware = require('../middlewares/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(router)
app.use(errorMiddleware)

module.exports = app