const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      throw new Error("Invalid Token");
    }

    jwt.verify(token, process.env.JWT_SECRET);

    return next()
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = authMiddleware;
