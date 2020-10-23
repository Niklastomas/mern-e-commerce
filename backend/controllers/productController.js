import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  await Product.find({}, (error, doc) => {
    if (error) {
      res.status(404).json({ message: 'Products not found' });
    } else {
      res.status(200).json(doc);
    }
  });
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  await Product.findById(req.params.id, (error, doc) => {
    if (error) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json(doc);
    }
  });
});

export { getProducts, getProductById };
