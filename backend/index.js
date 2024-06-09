import express from 'express';

import { PORT } from './config.js';

const app = express();

// creating server route 
app.get('/', (request, response) => {
  console.log(request)
  return response.status(201).send('Welcome to Transaction-API')
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`)
})