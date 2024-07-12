const { Properties, Images } = require("../models");
const { getAverageRatingAndReviews } = require("../controllers/reviewController");

const getProperty = async (req, res, next) => {
  try {
    // Ambil semua properti dengan gambar terkait
    const properties = await Properties.findAll({
      include: [
        {
          model: Images,
          attributes: ["url"],
        },
      ],
    });

    // Transformasi data properti dan tambahkan data review yang diakumulasi
    const transformedData = await Promise.all(properties.map(async (property) => {
      const { averageRating, reviews } = await getAverageRatingAndReviews(property.id);

      return {
        ...property.dataValues,
        Images: property.Images.map((image) => image.url),
        averageRating: averageRating || null,
        reviews: reviews || [],
      };
    }));

    return res.status(200).json(transformedData);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data properti.' });
  }
};

const getPropertyDetail = async (req, res, next) => {
  try {
    // Ambil properti berdasarkan id
    const property = await Properties.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Images,
        attributes: ["url"],
      },
    });

    if (!property) {
      return res.status(404).json({ message: "Properti tidak ditemukan" });
    }

    const { averageRating, reviews } = await getAverageRatingAndReviews(property.id);

    const transformedData = {
      ...property.dataValues,
      Images: property.Images.map((image) => image.url),
      averageRating: averageRating || null,
      reviews: reviews || [],
    };

    return res.status(200).json(transformedData);
  } catch (error) {
    console.error("Error fetching property detail:", error);
    return res.status(500).json({ error: 'Terjadi kesalahan saat mengambil detail properti.' });
  }
};

const addProperty = async (req, res, next) => {
    const {userID, address, country, description, price, cleaningFee, availabilityDateFrom, availabilityDateTo, type, lon, lat, locationDesc, houseRules, safetyProperty, cancellationPolicy, hostedDate, pets, parties, smoking, coAlarm, smokeAlarm, guestNumber, bedroomsNumber, bathsNumber, scenicViews, bathroom, laundry, family, heatingCooling, internet, office, kitchen, diningRoom, outdoor, parking, services, notIncluded, star, favorite } = req.body;
    const data = await Properties.create({
        userID, address, country, description, price, cleaningFee, availabilityDateFrom, availabilityDateTo, type, lon, lat, locationDesc, houseRules, safetyProperty, cancellationPolicy, hostedDate, pets, parties, smoking, coAlarm, smokeAlarm, guestNumber, bedroomsNumber, bathsNumber, scenicViews, bathroom, laundry, family, heatingCooling, internet, office, kitchen, diningRoom, outdoor, parking, services, notIncluded, star, favorite
    });

    return res.status(200).json(data);
};

const updateProperty = async (req, res, next) => {
    const { userID, address, country, description, price, cleaningFee, availabilityDateFrom, availabilityDateTo, type, lon, lat, locationDesc, houseRules, safetyProperty, cancellationPolicy, hostedDate, pets, parties, smoking, coAlarm, smokeAlarm, guestNumber, bedroomsNumber, bathsNumber, scenicViews, bathroom, laundry, family, heatingCooling, internet, office, kitchen, diningRoom, outdoor, parking, services, notIncluded, star, favorite} = req.body;

    const data = await Properties.findOne({
        where: {
            id: req.params.id,
        },
    });
    data.userID = userID;
    data.address = address;
    data.country = country;
    data.description = description;
    data.price = price;
    data.cleaningFee = cleaningFee;
    data.availabilityDateFrom = availabilityDateFrom;
    data.availabilityDateTo = availabilityDateTo;
    data.type = type;
    data.lon = lon;
    data.lat = lat;
    data.locationDesc = locationDesc;
    data.houseRules = houseRules;
    data.safetyProperty = safetyProperty;
    data.cancellationPolicy = cancellationPolicy;
    data.hostedDate = hostedDate;
    data.pets = pets;
    data.parties = parties;
    data.smoking = smoking;
    data.coAlarm = coAlarm;
    data.smokeAlarm = smokeAlarm;
    data.guestNumber = guestNumber;
    data.bedroomsNumber = bedroomsNumber;
    data.bathsNumber = bathsNumber;
    data.scenicViews = scenicViews;
    data.bathroom = bathroom;
    data.laundry = laundry;
    data.family = family;
    data.heatingCooling = heatingCooling;
    data.internet = internet;
    data.office = office;
    data.kitchen = kitchen;
    data.diningRoom = diningRoom;
    data.outdoor = outdoor;
    data.parking = parking;
    data.services = services;
    data.notIncluded = notIncluded;
    data.star = star;
    data.favorite = favorite;
    await data.save();
    return res.status(200).json(data);
};

const deleteProperty = async (req, res, next) => {
    const data = await Properties.findOne({
        where: {
            id: req.params.id,
        },
    });

    await data.destroy();
    return res.status(200).json(data);
};

module.exports = {
    getProperty,
    getPropertyDetail,
    addProperty,
    updateProperty,
    deleteProperty,
};
