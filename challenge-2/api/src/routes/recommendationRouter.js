const { Router } = require('express')
const { getRecommendedProducts } = require('../../controllers/recommendationControllers')
const recommendationRouter = Router()

recommendationRouter.get('/', getRecommendedProducts)

module.exports = recommendationRouter