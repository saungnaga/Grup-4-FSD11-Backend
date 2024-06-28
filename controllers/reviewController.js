const { Review, Property } = require('../models');

// Fungsi untuk mengambil rata-rata rating dan semua review berdasarkan propertyId
const getAverageRatingAndReviews = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const reviews = await Review.findAll({ where: { propertyId } });

    if (!reviews.length) {
      return res.status(404).json({ error: 'No reviews found for this property.' });
    }

    const totalRatings = reviews.reduce((acc, review) => {
      acc.cleanlinessRate += review.cleanlinessRate;
      acc.accuracyRate += review.accuracyRate;
      acc.checkInRate += review.checkInRate;
      acc.communicationRate += review.communicationRate;
      acc.locationRate += review.locationRate;
      acc.valueRate += review.valueRate;
      return acc;
    }, {
      cleanlinessRate: 0,
      accuracyRate: 0,
      checkInRate: 0,
      communicationRate: 0,
      locationRate: 0,
      valueRate: 0
    });

    const reviewCount = reviews.length;
    const averageRating = {};
    for (const key in totalRatings) {
      averageRating[key] = (totalRatings[key] / reviewCount).toFixed(2);
    }

    // Format respons sesuai yang diinginkan
    const response = {
      propertyId,
      averageRating,
      reviews: reviews.map(review => ({
        reviewText: review.reviewText
      }))
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching reviews.' });
  }
};

// Fungsi untuk menyimpan data rating baru
const addReview = async (req, res) => {
  try {
    const { propertyId, userId, reviewText, cleanlinessRate, accuracyRate, checkInRate, communicationRate, locationRate, valueRate } = req.body;

    // Validasi input
    if (!propertyId || !userId || !cleanlinessRate || !accuracyRate || !checkInRate || !communicationRate || !locationRate || !valueRate) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Buat review baru
    const newReview = await Review.create({
      propertyId,
      userId,
      reviewText,
      cleanlinessRate,
      accuracyRate,
      checkInRate,
      communicationRate,
      locationRate,
      valueRate
    });

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the review.' });
  }
};

module.exports = {
  getAverageRatingAndReviews,
  addReview
};
