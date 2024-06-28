const express = require('express');
const router = express.Router();
const { reviewController } = require('../controllers');

// Rute untuk mendapatkan rata-rata rating dan semua review berdasarkan propertyId
router.get('/average-rating/:propertyId', reviewController.getAverageRatingAndReviews);

// Rute untuk menambahkan review baru
router.post('/add-review', reviewController.addReview);

module.exports = router;
