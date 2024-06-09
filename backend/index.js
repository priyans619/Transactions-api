import express from 'express';

import { PORT, mongoURL } from './config.js';
import mongoose from 'mongoose';

const app = express();

// creating server route 
app.get('/', (request, response) => {
  console.log(request)
  return response.status(201).send('Welcome to Transaction-API')
});


mongoose
.connect(mongoURL)
.then(() => {
    console.log('Server is connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`)
    })
    // append app.listen() in .then() method for server to run if db is disconnected
})
.catch((error) => {
    console.log(error);

});