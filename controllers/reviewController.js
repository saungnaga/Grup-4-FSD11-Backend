const { Review } = require('../models');

// Fungsi untuk mengambil rata-rata rating dan semua review berdasarkan propertyId
const getAverageRatingAndReviews = async (propertyId) => {
  try {
    const reviews = await Review.findAll({ where: { propertyId } });

    if (!reviews.length) {
      return {
        averageRating: null, reviews: []
      };
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

    return {
      averageRating,
      reviews: reviews.map(review => ({
        reviewText: review.reviewText,
        // userId: review.userId,
        // propertyId: review.propertyId,
      }))
    };
  } catch (error) {
    throw new Error('An error occurred while fetching reviews.');
  }
};

// Endpoint untuk mendapatkan rata-rata rating dan review berdasarkan propertyId
const getAverageRatingAndReviewsHandler = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const result = await getAverageRatingAndReviews(propertyId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching reviews.' });
  }
};

// Fungsi untuk menyimpan data rating baru
const addReview = async (req, res) => {
  try {
    const { propertyId, userId, reviewText, cleanlinessRate, accuracyRate, checkInRate, communicationRate, locationRate, valueRate } = req.body;

    // Validasi input
    if (!propertyId || !userId || !cleanlinessRate || !accuracyRate || !checkInRate || !communicationRate || !locationRate || !valueRate || !reviewText) {
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

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { reviewText, cleanlinessRate, accuracyRate, checkInRate, communicationRate, locationRate, valueRate } = req.body;

    // Cari review berdasarkan ID
    const review = await Review.findByPk(id);

    if (!review) {
      return res.status(404).json({ error: 'Review tidak ditemukan.' });
    }

    // Update review
    review.reviewText = reviewText;
    review.cleanlinessRate = cleanlinessRate;
    review.accuracyRate = accuracyRate;
    review.checkInRate = checkInRate;
    review.communicationRate = communicationRate;
    review.locationRate = locationRate;
    review.valueRate = valueRate;

    await review.save();

    res.status(200).json(review);
  } catch (error) {
    console.error('Terjadi kesalahan saat memperbarui review:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat memperbarui review.' });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'ID parameter is missing.' });
    }

    const review = await Review.findOne({ where: { id:req.params.id } });

    if (!review) {
      return res.status(404).json({ error: 'Review tidak ditemukan.' });
    }

    await review.destroy();
    return res.status(200).json({ message: 'Review berhasil dihapus.' });
  } catch (error) {
    console.error('Terjadi kesalahan saat menghapus review:', error);
    return res.status(500).json({ error: 'Terjadi kesalahan saat menghapus review.' });
  }
};


module.exports = {
  getAverageRatingAndReviews,
  getAverageRatingAndReviewsHandler,
  addReview,
  updateReview,
  deleteReview,
};
