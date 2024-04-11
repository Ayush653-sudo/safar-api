const express = require('express');
const router = express.Router();
const vehicleController = require('../controller/vehicleController');

// Register vehicle
router.post('/register', vehicleController.register);
router.post('',vehicleController.get);
module.exports = router;