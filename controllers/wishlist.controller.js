const { Wishlists } = require("../models");

const getWishlist = async (req, res, next) => {
    const data = await Wishlists.findAll();
    return res.status(200).json(data);
};

const getWishlistDetail = async (req, res, next) => {
    const data = await Wishlists.findOne({
        where: {
            id: req.params.id,
        },
    });

    return res.status(200).json(data);
};

const addWishlist = async (req, res, next) => {
    const { userID, PropertyID } = req.body;
    const data = await Wishlists.create({
        userID,
        PropertyID,
    });

    return res.status(200).json(data);
};

const updateWishlist = async (req, res, next) => {
    const {  userID, PropertyID } = req.body;

    const data = await Wishlists.findOne({
        where: {
            id: req.params.id,
        },
    });

    data.userID = userID;
    data. PropertyID =  PropertyID;

    await data.save();
    return res.status(200).json(data);
};

const deleteWishlist = async (req, res, next) => {
    const data = await Wishlists.findOne({
        where: {
            id: req.params.id,
        },
    });

    await data.destroy();
    return res.status(200).json(data);
};

module.exports = {
    getWishlist,
    getWishlistDetail,
    addWishlist,
    updateWishlist,
    deleteWishlist,
};
