const express = require('express');
const router = express.Router();
const { getAverageRating, addReview } = require('../controllers/reviewController');

// Rute untuk mendapatkan rata-rata rating berdasarkan propertyId
router.get('/average-rating/:propertyId', getAverageRating);

// Rute untuk menambahkan review baru
router.post('/add-review', addReview);

module.exports = router;
