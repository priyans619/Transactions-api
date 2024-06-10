import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import { User } from '../models/UserModel.js';
import { Transaction } from '../models/TransactionModel.js';
import { mongoURL } from '../config.js';

// Connect to MongoDB
mongoose.connect(mongoURL);

populateDatabase();
