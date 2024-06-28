const { Router } = require("express");
const router = Router();
const routes =
  [
    require("./reviewRoutes"),
    require("./user.routes"),
    require("./wishlist.routes"),
    require("./property.routes"),
    require("./images.routes"),
    require("./room.routes"),
    require("./booking.routes"),
  ];
for (const route of routes) {
  router.use("/api", route);
}


router.all("*", (req, res, next) => {
  return res.status(404).json({
    messsage: "Halaman tidak ditemukan",
  });
});

module.exports = router;