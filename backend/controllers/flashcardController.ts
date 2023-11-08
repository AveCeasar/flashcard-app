const Flashcard = require('../models/flashcardModel');

// Create a new flashcard
exports.createFlashcard = async (req, res) => {
  try {
    const { englishTerm, polishTerm, difficultyLevel, category, createdBy } = req.body;
    
    // Create and save the flashcard
    const flashcard = new Flashcard({ englishTerm, polishTerm, difficultyLevel, category, createdBy });
    await flashcard.save();

    res.status(201).json(flashcard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all flashcards
exports.getAllFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.status(200).json(flashcards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single flashcard by id
exports.getFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }
    res.status(200).json(flashcard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a flashcard
exports.updateFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!flashcard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }
    res.status(200).json(flashcard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a flashcard
exports.deleteFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndDelete(req.params.id);
    if (!flashcard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }
    res.status(200).json({ message: 'Flashcard deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};