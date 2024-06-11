import express from 'express';
import { getUserById } from '../controllers/userController.js';

const router = express.Router();

// Get user details by _id
router.get('/:id', getUserById);

export default router;


