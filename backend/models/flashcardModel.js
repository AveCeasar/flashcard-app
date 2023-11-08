// flashcardModel.js
const mongoose = require('mongoose');

// Define the schema for the flashcard model
const flashcardSchema = new mongoose.Schema({
  englishTerm: {
    type: String,
    required: true,
    trim: true
  },
  polishTerm: {
    type: String,
    required: true,
    trim: true
  },
  // Fields for future expansion
  audioClip: {
    type: String, // This could be a URL to the audio file
    default: null
  },
  sampleSentence: {
    type: String,
    default: null
  },
  // You might want to include a field for the difficulty level or category
  difficultyLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  category: {
    type: String,
    default: null // e.g., "food", "phrases", "travel"
  },
  // If you want to track which user created the flashcard
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // If you want to mark a flashcard as part of a certified set
  isCertified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

// Create a model from the schema
const Flashcard = mongoose.model('Flashcard', flashcardSchema);

module.exports = Flashcard;
