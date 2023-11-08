const express = require('express');
const router = express.Router();
const setController = require('../controllers/setController');

// Create a new set
router.post('/', setController.createSet);

// Get all sets
router.get('/', setController.getAllSets);

// Get a single set by id
router.get('/:id', setController.getSet);

// Update a set
router.put('/:id', setController.updateSet);

// Delete a set
router.delete('/:id', setController.deleteSet);

module.exports = router;
