const jwt = require("jsonwebtoken");
const { Users } = require("../models");
require("dotenv").config();

const login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await Users.findOne({
        where: {
            email,
        },
    });

    if (!user || user.password !== password) {
        return res.status(200).json({
            message: "email atau password salah",
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
        },
        process.env.JWT_SECRET
    );

    return res.status(200).json({
        token,
    });
};

module.exports = {
    login,
};
