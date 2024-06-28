const bookings = require("../models/bookings");

const { Booking } =-require("../models");

const getAllBookings = async (req, res, next) => {
    try {
        const data = await bookings.findAll();
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};




const createBooking = async (req, res, next) => {
    try {
        const { name, date, time } = req.body;
        const newBooking = await bookings.create({ name, date, time });
        return res.status(201).json(newBooking);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllBookings,
    createBooking // Pastikan fungsi ini diekspor
};

