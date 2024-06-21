const { Router } = require("express");
const router = Router();

const routes = [require("./booking.routes")];
for (const route of routes) {
  router.use("/api", route);
}

router.all("*", (req, res, next) => {
  return res.status(404).json({
    messsage: "Sepertinya kamu tersesat, kembalilah kejalan yang benar",
  });
});

module.exports = router;
