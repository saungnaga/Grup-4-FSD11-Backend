const { Users, Wishlists, Properties, Bookings } = require("../models");

const getUser = async (req, res, next) => {
  const data = await Users.findAll(
    {
      include:
        [
          {
            model: Wishlists,
            attributes: ["userID","PropertyID","isWishlist"],
          },
          {
            model: Properties,
          },
          {
            model: Bookings,
            attributes: ["userID","PropertyID","date_start","date_end","guest_number"],
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

const bcrypt = require('bcrypt');

const addUser = async (req, res, next) => {
  const { name, photoURL, email, address, password, governmentID, phone, EmergencyContact, paymentinfo, tripHistory, description, languanges } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const data = await Users.create({
      name,
      photoURL,
      email,
      address,
      password: hashedPassword, // Use the hashed password
      governmentID,
      phone,
      EmergencyContact,
      paymentinfo,
      tripHistory,
      description,
      languanges,
    });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};


const updateUser = async (req, res, next) => {
  const {
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
    description,
    languages,
  } = req.body;

  const data = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) {
    return res.status(404).json({ error: "User not found" });
  }
  if (email !== undefined) {
    data.email = email;
  }
  if (password !== undefined) {
    data.password = password;
  }
  if (name !== undefined) {
    data.name = name;
  }
  if (photoURL !== undefined) {
    data.photoURL = photoURL;
  }
  if (address !== undefined) {
    data.address = address;
  }
  if (governmentID !== undefined) {
    data.governmentID = governmentID;
  }
  if (phone !== undefined) {
    data.phone = phone;
  }
  if (EmergencyContact !== undefined) {
    data.EmergencyContact = EmergencyContact;
  }
  if (paymentinfo !== undefined) {
    data.paymentinfo = paymentinfo;
  }
  if (tripHistory !== undefined) {
    data.tripHistory = tripHistory;
  }
  if (description !== undefined) {
    data.description = description;
  }
  if (languages !== undefined) {
    data.languages = languages;
  }

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
