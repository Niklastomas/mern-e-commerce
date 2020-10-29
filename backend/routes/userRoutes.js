import express from 'express';
import {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  registerUser,
  updateUser,
  updateUserProfile,
} from '../controllers/userController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.get('/', protect, admin, getUsers);
router.get('/:id', protect, admin, getUserById);
router.put('/profile', protect, updateUserProfile);
router.put('/:id', protect, protect, updateUser);
router.delete('/:id', protect, admin, deleteUser);

export default router;
