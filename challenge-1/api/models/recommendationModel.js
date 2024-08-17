const mongoose = require('mongoose');

const recommendationSchema = mongoose.Schema(
    {
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
);

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;