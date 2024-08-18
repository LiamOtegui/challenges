const { Router } = require('express')
const getAllProducts = require('../../controllers/productControllers')
const productRouter = Router()

productRouter.get('/', getAllProducts)

module.exports = productRouter