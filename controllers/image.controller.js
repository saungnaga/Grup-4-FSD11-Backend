const { Images } = require("../models");

const getImage = async (req, res, next) => {
    const data = await Images.findAll({
    });
    return res.status(200).json(data);
};

const getImageDetail = async (req, res, next) => {
    const data = await Images.findOne({
        where: {
            id: req.params.id,
        },
    });

    return res.status(200).json(data);
};

const addImage = async (req, res, next) => {
    const { url, PropertyID } = req.body;
    const data = await Images.create({
        url,
        PropertyID,
    });

    return res.status(200).json(data);
};

const updateImage = async (req, res, next) => {
    const { url, PropertyID } = req.body;

    const data = await Images.findOne({
        where: {
            id: req.params.id,
        },
    });

    data.url = url;
    data.PropertyID = PropertyID;

    await data.save();
    return res.status(200).json(data);
};

const deleteImage = async (req, res, next) => {
    const data = await Images.findOne({
        where: {
            id: req.params.id,
        },
    });

    await data.destroy();
    return res.status(200).json(data);
};

module.exports = {
    getImage,
    getImageDetail,
    addImage,
    updateImage,
    deleteImage,
};
