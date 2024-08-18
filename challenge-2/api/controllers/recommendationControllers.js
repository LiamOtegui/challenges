const asyncHandler = require('express-async-handler');
const products = require('../data/products.json');
const users = require('../data/users.json');

const getRecommendedProducts = asyncHandler(async (req, res) => {
    const { user_id, glutenFreeOnly } = req.body;

    const user = users.find((user) => user._id === user_id);

    if (!user) {
        res.status(404);
        throw new Error('User not found!');
    }

    const { high_protein, high_carbs, high_fat, glutenFree } = user.preferences;

    let recommendedProducts = products.filter((product) => {
        let matches = false;
        if (high_protein && product.macronutrients.protein > 20) {
            matches = true;
        }
        if (high_carbs && product.macronutrients.carbohydrates > 30) {
            matches = true;
        }
        if (high_fat && product.macronutrients.fat > 10) {
            matches = true;
        }
        if (glutenFree && !product.glutenFree) {
            matches = false;
        }
        return matches;
    });

    if (glutenFreeOnly) {
        recommendedProducts = recommendedProducts.filter((product) => product.glutenFree)
    }

    if (recommendedProducts.length === 0) {
        res.status(404);
        throw new Error('No products were found matching the preferences');
    }

    // Limitar a 3 productos
    recommendedProducts = recommendedProducts.slice(0, 3);

    // Crear la respuesta con los productos recomendados
    const recommendedProductsResponse = recommendedProducts.map(product => ({
        product_name: product.name,
        reason: `High in ${Object.keys(product.macronutrients).find(key => product.macronutrients[key] > 20)}`,
    }));

    res.json({ user_id, recommended_products: recommendedProductsResponse });
});

module.exports = { getRecommendedProducts };