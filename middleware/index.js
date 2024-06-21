const roleMiddleware = async (req, res, next) => {
  // bakal ngecek ketika menambahkan user, role yangg dikirim tidak boleh selain 'user'
  req.body.name = "Lil " + req.body.name;
  next();
};

module.exports = { roleMiddleware };
