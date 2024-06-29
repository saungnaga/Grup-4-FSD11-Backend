const router = require("express").Router();

const routes = [require("./animals.routes"), require("./auth.routes")];

for (const route of routes) {
  router.use("/api", route);
}

module.exports = router;
