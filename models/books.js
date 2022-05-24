'use strict';

// Bring in mongoose
const mongoose = require('mongoose')

// Extract schema property
const { Schema } = mongoose;

// Create book schema
const bookSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  recommended: {type: Boolean, required: true},
});

// Define model, add predefined schema, add arguments
const BookModel = mongoose.model('Books', bookSchema)

module.exports = BookModel;





