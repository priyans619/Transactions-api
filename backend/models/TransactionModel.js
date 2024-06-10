import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    status:
    {
      type: String,
      enum: ['success', 'pending', 'failed'],
      required: true
    },
    type:
    {
      type: String,
      enum: ['debit', 'credit'],
      required: true
    },
    transactionDate:
    {
      type: Date,
      default: Date.now
    },
    amount:
    {
      type: Number,
      required: true
    },
    
  });

export const Transaction = mongoose.model('Transaction', TransactionSchema);
