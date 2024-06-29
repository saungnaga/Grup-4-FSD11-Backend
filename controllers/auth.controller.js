const jwt = require("jsonwebtoken");
const { Users } = require("../models");

const login = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await Users.findOne({
    where: {
      username,
    },
  });

  if (!user || user.password !== password) {
    return res.status(200).json({
      message: "Username atau password salah",
    });
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    "d1f2745295866f7012f74c237ad0e0efe5c7d6393de8662efbf52b3a57eaee80"
  );

  return res.status(200).json({
    token,
  });
};

module.exports = {
  login,
};
