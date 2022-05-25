'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Books = require('./models/books');

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);

// USE
const app = express();
app.use(cors());
app.use(express.json());

// PORT
const PORT = process.env.PORT || 3002;

// ROUTES
app.get('/', (request, response) => {
  response.status(200).send('Hello from the server!');
})

app.get('/books', getBooks);
async function getBooks(request, response, next) {
  try {
    let results = await Books.find();
    response.status(200).send(results);
  } catch(error) {
    next(error);
  }
}

app.post('/books', postBooks);
async function postBooks(request, response, next) {
  console.log(request.body)
  try {
    let createdBook = await Books.create(request.body);
    // console.log(createdBook);
    response.status(200).send(createdBook)
  } catch(error) {
    next(error);
  }
}

app.delete('/books/:id', deleteBooks);
async function deleteBooks(request, response, next) {
  // console.log(request.params.id);
  try {
    await Books.findByIdAndDelete(request.params.id);
    response.status(200).send('check console')
  } catch (error) {
    next(error);
  }
}



// app.get('/test', (request, response) => {

//   response.send('test request received')

// })

app.get('*', (request, response) => {
  response.status(404).send('404 not available');
})

// ERRORS
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
