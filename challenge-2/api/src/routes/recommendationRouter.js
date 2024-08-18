const { Router } = require('express')
const { getRecommendedProducts } = require('../../controllers/recommendationControllers')
const recommendationRouter = Router()

recommendationRouter.get('/:username', getRecommendedProducts)

module.exports = recommendationRouter