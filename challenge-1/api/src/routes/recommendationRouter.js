const { Router } = require('express')
const { postRecommendation, getRecommendations, updateRecommendation, deleteRecommendation } = require('../../controllers/recommendationControllers')
const recommendationRouter = Router()

recommendationRouter.post('/', postRecommendation)
recommendationRouter.get('/', getRecommendations)
recommendationRouter.put('/:id', updateRecommendation)
recommendationRouter.delete('/:id', deleteRecommendation)

module.exports = recommendationRouter