const mongoose = require('mongoose')

const recommendationSchema = mongoose.Schema(
    {
        user_id: {
            type: Number,
            required: true
        },
        recommendations: [
            {
                nutrient: {
                    type: String,
                    required: true
                },
                recommended_foods: {
                    type: [String],
                    required: false
                },
                avoid_foods: {
                    type: [String],
                    required: false
                }
            }
        ]
    },
    {
        timestamps: true
    }
)

const Recommendation = mongoose.model('Recommendation', recommendationSchema)

module.exports = Recommendation