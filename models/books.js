'use strict';

// Bring in mongoose
const mongoose = require('mongoose')

// Extract schema property
const { Schema } = mongoose;

// Create book schema
const bookSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  readStatus: {type: String, required: true},
});

// Define model, add predifned schema, add arguments
const BookModel = mongoose.model('Books', bookSchema)

module.exports = BookModel;





