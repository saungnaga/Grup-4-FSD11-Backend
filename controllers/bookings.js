const { where } = require("sequelize");
const { booking } = require("../models");
 

const getBoking = async (req, res, next) => {
    const data = await booking.findAll();
    return res.status(200).json(data);
};


const createBoking = async (req, res, next) => {
  const { id, message } = req.body;
  const data = await booking.create({
    id,
    message
  });

    return res.status(200).json(data)
};

const updateBoking = (req, res, next) => {
    const { id, message } = req.body;
    const booking = bookings.find(b => b.id === id);
    if (booking) {
      booking.message = message;
      res.status(200).json(booking);
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  }

const deleteBoking = (req, res, next) => {
  const { id } = req.body;
  const index = bookings.findIndex(b => b.id === id);
  if (index !== -1) {
    bookings.splice(index, 1);
    res.status(200).json({ message: "Booking deleted" });
  } else {
    res.status(404).json({ message: "Booking not found" });
  }
};

module.exports = {
  getBoking,
  createBoking,
  updateBoking,
  deleteBoking
};






