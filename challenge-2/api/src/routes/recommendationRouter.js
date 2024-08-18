const { Router } = require('express')
const { getRecommendedProducts, getAllProducts } = require('../../controllers/recommendationControllers')
const recommendationRouter = Router()

recommendationRouter.get('/', getRecommendedProducts)
recommendationRouter.get('/products', getAllProducts)

module.exports = recommendationRouter