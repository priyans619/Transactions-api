import express from 'express';
import { getUserTransactions, getAllTransactions} from '../controllers/transactionController.js';

const router = express.Router();

// route for all transactions for a user by user ID
router.get('/user/:userId', getUserTransactions);

// rouite for all transactions with user details by filters and pagination
router.get('/', getAllTransactions);

export default router;


