const Set = require('../models/setModel');

// Create a new set
exports.createSet = async (req, res) => {
  try {
    const { title, description, flashcards, createdBy, isCertified, isPrivate, languageLevel } = req.body;
    
    // Create and save the set
    const set = new Set({ title, description, flashcards, createdBy, isCertified, isPrivate, languageLevel });
    await set.save();

    res.status(201).json(set);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all sets
exports.getAllSets = async (req, res) => {
  try {
    const sets = await Set.find().populate('flashcards');
    res.status(200).json(sets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single set by id
exports.getSet = async (req, res) => {
  try {
    const set = await Set.findById(req.params.id).populate('flashcards');
    if (!set) {
      return res.status(404).json({ message: 'Set not found' });
    }
    res.status(200).json(set);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a set
exports.updateSet = async (req, res) => {
  try {
    const set = await Set.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('flashcards');
    if (!set) {
      return res.status(404).json({ message: 'Set not found' });
    }
    res.status(200).json(set);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a set
exports.deleteSet = async (req, res) => {
  try {
    const set = await Set.findByIdAndDelete(req.params.id);
    if (!set) {
      return res.status(404).json({ message: 'Set not found' });
    }
    res.status(200).json({ message: 'Set deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};