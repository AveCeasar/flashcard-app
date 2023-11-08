// setModel.js
const mongoose = require('mongoose');

// Define the schema for the set model
const setSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  flashcards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flashcard'
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isCertified: {
    type: Boolean,
    default: false
  },
  isPrivate: {
    type: Boolean,
    default: true // Sets are private by default and can be made public by the creator or an admin.
  },
  // You can add more fields as needed, such as a field for the set's language level
  languageLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  // If you want to track the premium status of the set
  isPremium: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

// Create a model from the schema
const Set = mongoose.model('Set', setSchema);

module.exports = Set;
