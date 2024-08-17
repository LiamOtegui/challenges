const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    macronutrients: {
        protein: Number,
        carbs: Number,
        fat: Number
    },
    glutenFree: Boolean
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;