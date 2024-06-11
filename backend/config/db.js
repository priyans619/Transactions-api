import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log('Server is connected to database');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};