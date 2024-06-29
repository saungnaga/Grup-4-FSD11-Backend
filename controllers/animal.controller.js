const { Animals } = require("../models");

const getAll = async (req, res, next) => {
  const data = await Animals.findAll();
  return res.status(200).json(data);
};

const createOne = async (req, res, next) => {
  const data = await Animals.create(req.body);
  return res.status(201).json(data);
};

module.exports = {
  getAll,
  createOne,
};
