// userModel.js
const mongoose = require('mongoose');

// Define the schema for the user model
const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: { // Assuming you will hash passwords before saving
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'teacher', 'student'],
    default: 'student'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  // Add additional fields as needed
}, { timestamps: true });

// If you plan to handle email verification, you might want to add:
userSchema.add({
  isVerified: {
    type: Boolean,
    default: false
  }
});

// Optionally, if you want to track the premium status:
userSchema.add({
  isPremium: {
    type: Boolean,
    default: false
  }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
