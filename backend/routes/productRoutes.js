import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.get('/', getProducts);
router.get('/top', getTopProducts);
router.get('/:id', getProductById);
router.post('/', protect, admin, createProduct);
router.post('/:id/reviews', protect, createProductReview);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

export default router;
