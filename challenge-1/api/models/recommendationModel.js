const mongoose = require('mongoose')

const recommendationSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
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