const asyncHandler = require("../middleware/asyncHandler")


const getProducts = asyncHandler(async (req, res) => {
    const products = [
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Phone', price: 800 },
    ]
    res.json(products)
})

module.exports = { getProducts }