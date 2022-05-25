'use strict';

// Add dotenv, mongoose, db connection

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/books.js');

async function seed() {

  await Book.create({
    title: 'Wild at Heart',
    description: 'In Wild at Heart, John Eldredge invites men to recover their masculine heart, defined in the image of a passionate God. And he invites women to discover the secret of a man\'s soul and to delight in the strength and wildness men were created to offer.',
    recommended: true,
  });
  console.log('Wild at Heart was added')

  await Book.create({
    title: 'Gone Girl',
    description: 'With her razor-sharp writing and trademark psychological insight, Gillian Flynn delivers a fast-paced, devilishly dark, and ingeniously plotted thriller that confirms her status as one of the hottest writers around.',
    recommended: true,
  });
  console.log('Gone Girl was added')

  await Book.create({
    title: 'The Tipping Point',
    description: 'Discover Malcolm Gladwell\'s breakthrough debut and explore the science behind viral trends in business, marketing, and human behavior. The tipping point is that magic moment when an idea, trend, or social behavior crosses a threshold, tips, and spreads like wildfire.',
    recommended: true,
  });
  console.log('The Tipping Point was added')

  mongoose.disconnect();
}

seed();
