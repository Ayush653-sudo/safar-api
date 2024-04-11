const express = require('express');
const router = express.Router();
const rideController = require('../controller/rideController');

// Book ride
router.post('/Create', rideController.book);
router.get('/', rideController.getAllRides);
router.post('/search', rideController.searchRides);
router.post('/Bookride/:id', rideController.addPassenger);
module.exports = router;

