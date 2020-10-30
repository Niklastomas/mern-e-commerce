import { json } from 'express';
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

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id, (err, product) => {
    if (err) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json({
        message: `Successfully deleted product with id: ${product._id}`,
      });
    }
  });
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  product.save((err, doc) => {
    if (err) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(201).json(doc);
    }
  });
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.countInStock = countInStock || product.countInStock;

    product.save((err, doc) => {
      if (err) {
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json(doc);
      }
    });
  } else {
    status(404).json({ message: 'Product not found' });
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
