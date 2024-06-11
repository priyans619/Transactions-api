import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';


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



mongoose
.connect(process.env.mongoURL)
.then(() => {
    console.log('Server is connected to database');
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`)
    })
    // append app.listen() in .then() method for server to run if db is disconnected
})
.catch((error) => {
    console.log(error);

});