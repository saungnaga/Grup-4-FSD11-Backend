const { Bookings } = require("../models");

const getBooking = async (req, res, next) => {
  const data = await Bookings.findAll();
  return res.status(200).json(data);
};

const getBookingDetail = async (req, res, next) => {
  const data = await Bookings.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(data);
};

const addBooking = async (req, res, next) => {
  const { userID, propertyID, date_start, date_end, guest_number } = req.body;
  const data = await Bookings.create({
    userID,
    propertyID,
    date_start,
    date_end,
    guest_number
  });

  return res.status(200).json(data);
};

const updateBooking = async (req, res, next) => {
  const {  userID, propertyID, date_start, date_end, guest_number } = req.body;

  const data = await Bookings.findOne({
    where: {
      id: req.params.id,
    },
  });

  data.userID =userID ; 
  data.propertyID =propertyID ; 
  data.date_start = date_start;
  data.date_end = date_end;
   guest_number

  await data.save();
  return res.status(200).json(data);
};

const deleteBooking = async (req, res, next) => {
  const data = await Bookings.findOne({
    where: {
      id: req.params.id,
    },
  });

  await data.destroy();
  return res.status(200).json(data);
};

module.exports = {
  getBooking,
  getBookingDetail,
  addBooking,
  updateBooking,
  deleteBooking,
};
