const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/', userController.getAllUsers);

// Get a single user by id
router.get('/:id', userController.getUser);

// Update a user
router.put('/:id', userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
