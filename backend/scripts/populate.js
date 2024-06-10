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




populateDatabase();
