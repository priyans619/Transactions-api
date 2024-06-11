import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import { connectDB } from './config/db.js';


const app = express();

// for loading process.env from config
dotenv.config();

// creating server route 
app.get('/', (request, response) => {
  console.log(request)
  return response.status(201).send('Welcome to Transaction-API')
});

// parsing request
app.use(express.json());


// Middleware for all Routes
app.use('/users', userRoute);



connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App is listening to port: ${process.env.PORT}`);
  });
}).catch((error) => {
  console.log(error);
});