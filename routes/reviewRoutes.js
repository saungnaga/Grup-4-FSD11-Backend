const express = require('express');
const router = express.Router();
const { reviewController } = require('../controllers');

// Rute untuk mendapatkan rata-rata rating dan semua review berdasarkan propertyId
router.get('/review/:propertyId', reviewController.getAverageRatingAndReviewsHandler);

// Rute untuk menambahkan review baru
router.post('/add-review', reviewController.addReview);

// Rute untuk update review baru
router.put('/updated-review/:id', reviewController.updateReview);

//rute untuk delete review
router.delete('/review/:id', reviewController.deleteReview);

module.exports = router;
