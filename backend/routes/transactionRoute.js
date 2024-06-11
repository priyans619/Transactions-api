import express from 'express';
import { getUserTransactions} from '../controllers/transactionController.js';

const router = express.Router();

// route for all transactions for a user by user ID
router.get('/user/:userId', getUserTransactions);


export default router;


