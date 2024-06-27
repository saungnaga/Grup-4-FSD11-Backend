const { Users, Wishlists, Properties } = require("../models");

const getUser = async (req, res, next) => {
  const data = await Users.findAll(
    {
      include: 
      [
        {
          model: Wishlists,
        },
        {
          model: Properties,
        },
      ],
    }
  );
  return res.status(200).json(data);
};

const getUserDetail = async (req, res, next) => {
  const data = await Users.findOne({
    where: 
    {
      id: req.params.id,
    },
    include: 
    [
      {
        model: Wishlists,
      },
      {
        model: Properties,
      },
    ],
  });

  return res.status(200).json(data);
};

const addUser = async (req, res, next) => {
  const { name, photoURL, email, address, password, governmentID, phone, EmergencyContact, paymentinfo, tripHistory } = req.body;
  const data = await Users.create({
    name,
    photoURL,
    email,
    address,
    password,
    governmentID,
    phone,
    EmergencyContact,
    paymentinfo,
    tripHistory,
  });

  return res.status(200).json(data);
};

const updateUser = async (req, res, next) => {
  const { name, photoURL, email, address, password, governmentID, phone, EmergencyContact, paymentinfo, tripHistory } = req.body;

  const data = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  data.name = name;
  data.photoURL = photoURL;
  data.email = email;
  data.address = address;
  data.password = password;
  data.governmentID = governmentID;
  data.phone = phone;
  data.EmergencyContact = EmergencyContact;
  data.paymentinfo = paymentinfo;
  data.tripHistory = tripHistory;

  await data.save();
  return res.status(200).json(data);
};

const deleteUser = async (req, res, next) => {
  const data = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  await data.destroy();
  return res.status(200).json(data);
};

module.exports = {
  getUser,
  getUserDetail,
  addUser,
  updateUser,
  deleteUser,
};
