import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    await Product.find({}, (error, doc) => {
      if (error) {
        res.status(400).json(error.message);
      } else {
        res.status(200).json(doc);
      }
    });
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    await Product.findById(req.params.id, (error, doc) => {
      if (error) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json(doc);
      }
    });
  })
);

export default router;
