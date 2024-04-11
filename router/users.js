const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Register user
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

// Logout (optional)

module.exports = router;
