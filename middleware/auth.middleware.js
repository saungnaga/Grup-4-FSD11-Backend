const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Forbidden",
    });
  }

  try {
    jwt.verify(token, "d1f2745295866f7012f74c237ad0e0efe5c7d6393de8662efbf52b3a57eaee80");
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Token is invalid",
    });
  }
};

module.exports = authMiddleware;
