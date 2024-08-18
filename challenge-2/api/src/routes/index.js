const { Router } = require('express')
const recommendationRouter = require('./recommendationRouter')
const router = Router()

router.use('/', recommendationRouter)

module.exports = router