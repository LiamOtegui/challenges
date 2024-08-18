const asyncHandler = require('express-async-handler')
const products = require('../data/products.json')

const getAllProducts = asyncHandler(async (req, res) => {
    res.json(products)
})

module.exports = getAllProducts