const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users } = require("../models");
require("dotenv").config();

const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(200).json({
            message: "email atau password salah",
        });
    }

    const user = await Users.findOne({
        where: {
            email,
        },
    });

    if (!user) {
        return res.status(200).json({
            message: "email atau password salah"
        })
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(200).json({
            message: "email atau password salah"
        })
    }
    
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
        },
        process.env.JWT_SECRET
    );

    return res.status(200).json({
        token,
    });
};

const register = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(200).json({
            message: "Data tidak lengkap",
        });
    }

    const existingUser = await Users.findOne({
        where: {
            email,
        },
    });

    if (existingUser) {
        return res.status(200).json({
            message: "Email sudah terdaftar",
        });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await Users.create({
        name,
        email,
        password: hashedPassword,
    });

    return res.status(201).json({
        message: "Register Berhasil",
        user: newUser,
    });
};

module.exports = {
    login,
    register,
};