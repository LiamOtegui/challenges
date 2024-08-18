const asyncHandler = require('express-async-handler');
const products = require('../data/products.json');
const users = require('../data/users.json');

const getRecommendedProducts = asyncHandler(async (req, res) => {
    const { username } = req.body;

    const user = users.find((user) => user.username === username);

    if (!user) {
        res.status(404);
        throw new Error('User not found!');
    }

    const { high_protein, high_carbs, high_fat, glutenFree } = user.preferences;

    let recommendedProducts = products.filter((product) => {
        if (glutenFree && !product.glutenFree) {
            return false;
        }
        if (high_protein && product.macronutrients.protein > 25) {
            return true;
        }
        if (high_carbs && product.macronutrients.carbohydrates > 30) {
            return true;
        }
        if (high_fat && product.macronutrients.fat >= 20) {
            return true;
        }
        return false;
    });

    if (recommendedProducts.length === 0) {
        res.status(404);
        throw new Error('No products were found matching the preferences');
    }

    recommendedProducts = recommendedProducts.slice(0, 3);

    const recommendedProductsResponse = recommendedProducts.map(product => {
        const reasons = [];
        let gluten = 'Not gluten free'
        if (product.macronutrients.protein > 25 && high_protein) {
            reasons.push('High in protein');
        }
        if (product.macronutrients.carbohydrates > 30 && high_carbs) {
            reasons.push('High in carbohydrates');
        }
        if (product.macronutrients.fat >= 20 && high_fat) {
            reasons.push('High in fat');
        }
        if (product.glutenFree) {
            gluten = 'Gluten free'
        }
        return {
            product_name: product.name,
            reasons: reasons.length > 0 ? reasons : ['No specific reason'],
            gluten: gluten
        };
    });

    res.json({ username, recommendedProductsResponse });
});

const getAllProducts = asyncHandler(async (req, res) => {
    res.json(products)
})

module.exports = { getRecommendedProducts, getAllProducts };