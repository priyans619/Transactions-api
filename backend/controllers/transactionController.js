import { Transaction } from '../models/TransactionModel.js';

export const getUserTransactions = async (req, res) => {
  try {
    const { status, from, to, type, page = 1, limit = 10 } = req.query;
    const filters = { userId: req.params.userId };

    if (status) filters.status = status;
    if (type) filters.type = type;
    if (from || to) {
      filters.transactionDate = {};
      if (from) filters.transactionDate.$gte = new Date(from);
      if (to) filters.transactionDate.$lte = new Date(to);
    }

    const transactions = await Transaction.find(filters)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const count = await Transaction.countDocuments(filters);

    res.json({ count, transactions });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const { status, from, to, type } = req.query;
    const filters = {};

    if (status) filters.status = status;
    if (type) filters.type = type;
    if (from || to) {
      filters.transactionDate = {};
      if (from) filters.transactionDate.$gte = new Date(from);
      if (to) filters.transactionDate.$lte = new Date(to);
    }

    const transactions = await Transaction.find(filters).populate('userId');
    res.json(transactions);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


