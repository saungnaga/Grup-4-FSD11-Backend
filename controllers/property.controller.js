const { properties } = require("../models");

const getProperty = async (req, res, next) => {
    const data = await properties.findAll();
    return res.status(200).json(data);
};

const getPropertyDetail = async (req, res, next) => {
    const data = await properties.findOne({
        where: {
            id: req.params.id,
        },
    });

    return res.status(200).json(data);
};

const addProperty = async (req, res, next) => {
    const { name, photos, description, price, cleaningFee, availabilityDate, ratingAverage, type, lon, lat, address, country, locationDesc, houseRules, safetyProperty, cancellationPolicy, hostedDate, checkIn, checkOut, pets, parties, comercialPhoto, smoking, coAlarm, smokeAlarm, guestNumber, bedroomsNumber, bathsNumber, isFavourite, scenicViews, bathroom, laundry, family, heatingCooling, internet, office, kitchen, diningRoom, outdoor, parking, services, notIncluded } = req.body;
    const data = await properties.create({
        name,
        photos,
        description,
        price,
        cleaningFee,
        availabilityDate,
        ratingAverage,
        type,
        lon,
        lat,
        address,
        country,
        locationDesc,
        houseRules,
        safetyProperty,
        cancellationPolicy,
        hostedDate,
        checkIn,
        checkOut,
        pets,
        parties,
        comercialPhoto,
        smoking,
        coAlarm,
        smokeAlarm,
        guestNumber,
        bedroomsNumber,
        bathsNumber,
        isFavourite,
        scenicViews,
        bathroom,
        laundry,
        family,
        heatingCooling,
        internet,
        office,
        kitchen,
        diningRoom,
        outdoor,
        parking,
        services,
        notIncluded,
    });

    return res.status(200).json(data);
};

const updateProperty = async (req, res, next) => {
    const { name, photos, description, price, cleaningFee, availabilityDate, ratingAverage, type, lon, lat, address, country, locationDesc, houseRules, safetyProperty, cancellationPolicy, hostedDate, checkIn, checkOut, pets, parties, comercialPhoto, smoking, coAlarm, smokeAlarm, guestNumber, bedroomsNumber, bathsNumber, isFavourite, scenicViews, bathroom, laundry, family, heatingCooling, internet, office, kitchen, diningRoom, outdoor, parking, services, notIncluded } = req.body;

    const data = await properties.findOne({
        where: {
            id: req.params.id,
        },
    });

    data.name = name;
    data.photos = photos;
    data.description = description;
    data.price = price;
    data.cleaningFee = cleaningFee;
    data.availabilityDate = availabilityDate;
    data.ratingAverage = ratingAverage;
    data.type = type;
    data.lon = lon;
    data.lat = lat;
    data.address = address;
    data.country = country;
    data.locationDesc = locationDesc;
    data.houseRules = houseRules;
    data.safetyProperty = safetyProperty;
    data.cancellationPolicy = cancellationPolicy;
    data.hostedDate = hostedDate;
    data.checkIn = checkIn;
    data.checkOut = checkOut;
    data.pets = pets;
    data.parties = parties;
    data.comercialPhoto = comercialPhoto;
    data.smoking = smoking;
    data.coAlarm = coAlarm;
    data.smokeAlarm = smokeAlarm;
    data.guestNumber = guestNumber;
    data.bedroomsNumber = bedroomsNumber;
    data.bathsNumber = bathsNumber;
    data.isFavourite = isFavourite;
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

    await data.save();
    return res.status(200).json(data);
};

const deleteProperty = async (req, res, next) => {
    const data = await properties.findOne({
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
