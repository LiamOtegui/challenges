const { Router } = require('express')
const router = Router()
const recommendationRouter = require('../routes/recommendationRouter')

router.use('/', recommendationRouter)

module.exports = router