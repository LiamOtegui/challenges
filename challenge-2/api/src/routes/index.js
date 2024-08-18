const { Router } = require('express')
const recommendationRouter = require('./recommendationRouter')
const productRouter = require('./productRouter')
const router = Router()

router.use('/username', recommendationRouter)
router.use('/products', productRouter)

module.exports = router