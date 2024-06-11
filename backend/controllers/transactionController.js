import { Transaction } from '../models/TransactionModel.js';

export const getUserTransactions = async (req, res) => {
  try {
    const { status, from, to, type } = req.query;
    const filters = { userId: req.params.userId };

    if (status) filters.status = status;
    if (type) filters.type = type;
    if (from || to) {
      filters.transactionDate = {};
      if (from) filters.transactionDate.$gte = new Date(from);
      if (to) filters.transactionDate.$lte = new Date(to);
    }
   

    const transactions = await Transaction.find(filters);
    res.json(transactions);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


