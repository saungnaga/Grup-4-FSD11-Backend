const { Router } = require("express");
const router = Router();

const routes = [
  require("./reviewRoutes"),
];

for (const route of routes) {
  router.use("/api", route);
}

router.all("*", (req, res, next) => {
  return res.status(404).json({
    message: "Halaman tidak ditemukan",
  });
});

module.exports = router;
