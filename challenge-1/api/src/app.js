const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session');
const router = require('../src/routes/index')
const errorMiddleware = require('../middlewares/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


app.use(session({
    secret: 'yourSecretKey', // Lo voy a dejar asi, pero esto se puede cambiar a una contraseña real
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // Para que dure un dia la sesion.
    }
}));

app.use(router)
app.use(errorMiddleware)

module.exports = app