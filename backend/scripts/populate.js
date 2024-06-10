import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import { User } from '../models/UserModel.js';
import { Transaction } from '../models/TransactionModel.js';
import { mongoURL } from '../config.js';

// Connect to MongoDB
mongoose.connect(mongoURL);

// Function to generate random users
const generateUsers = async (numUsers) => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    const user = new User({
      name: faker.person.fullName(),
      phoneNumber: faker.phone.number()
    });
    users.push(user);
  }
  await User.insertMany(users);
  return users;
};

// func generate random transactions for each user
const generateTransactions = async (users, numTransactionsPerUser) => {
  const transactions = [];
  for (const user of users) {
    for (let i = 0; i < numTransactionsPerUser; i++) {
      const transaction = new Transaction({
        status: faker.helpers.arrayElement(['success', 'pending', 'failed']),
        type: faker.helpers.arrayElement(['debit', 'credit']),
        transactionDate: faker.date.past(),
        amount: faker.finance.amount(),
        userId: user._id
      });
      transactions.push(transaction);
    }
  }
  await Transaction.insertMany(transactions);
};

// func to populate the database
const populateDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();
    const numUsers = 100;
    const numTransactionsPerUser = 500;
    const users = await generateUsers(numUsers);
    await generateTransactions(users, numTransactionsPerUser);
    console.log('Database populated successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

populateDatabase();
