const { Router } = require('express')
const { getUsers, authenticateUser } = require('../../controllers/usersControllers')
const usersRouter = Router()

usersRouter.get('/', getUsers)
usersRouter.post('/login', authenticateUser)

module.exports = usersRouter