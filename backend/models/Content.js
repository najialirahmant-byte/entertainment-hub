const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: [String],
  type: {
    type: String,
    enum: ['movie', 'show'],
    required: true,
  },
  posterUrl: {
    type: String,
    default: 'https://via.placeholder.com/300x450',
  },
  bannerUrl: {
    type: String,
    default: 'https://via.placeholder.com/1920x1080',
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 7.5,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number, // in minutes
  },
  cast: [String],
  director: String,
  language: [String],
  country: String,
  imdbId: String,
  watchCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Content', contentSchema);
