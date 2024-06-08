const { Users } = require("../models");

const getUser = async (req, res, next) => {
  const data = await Users.findAll();
  return res.status(200).json(data);
};

const getUserDetail = async (req, res, next) => {
  const data = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(data);
};

const addUser = async (req, res, next) => {
  const { name, email, password, phone } = req.body;

  const data = await Users.create({
    name,
    email,
    password,
    phone,
  });

  return res.status(200).json(data);
};

const updateUser = async (req, res, next) => {
  const { name, email, password, phone } = req.body;

  const data = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  data.name = name;
  data.email = email;
  data.password = password;
  data.phone = phone;

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
