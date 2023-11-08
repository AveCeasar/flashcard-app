const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcardController');

// Create a new flashcard
router.post('/', flashcardController.createFlashcard);

// Get all flashcards
router.get('/', flashcardController.getAllFlashcards);

// Get a single flashcard by id
router.get('/:id', flashcardController.getFlashcard);

// Update a flashcard
router.put('/:id', flashcardController.updateFlashcard);

// Delete a flashcard
router.delete('/:id', flashcardController.deleteFlashcard);

module.exports = router;
