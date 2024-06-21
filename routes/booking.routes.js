
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookings');

// Endpoint untuk mendapatkan semua bookings
router.get('/bookings', bookingController.getAllBookings);

// Endpoint untuk membuat booking baru
router.post('/bookings', bookingController.createBooking);

module.exports = router;

