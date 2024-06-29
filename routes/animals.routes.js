const router = require("express").Router();
const { AnimalController } = require("../controllers");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/animals", AnimalController.getAll);
router.post("/animals", authMiddleware, AnimalController.createOne);

module.exports = router;
