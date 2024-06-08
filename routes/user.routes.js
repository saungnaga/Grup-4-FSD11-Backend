const { Router } = require("express");
const router = Router();

const { roleMiddleware } = require("../middleware");
const { UserControllers } = require("../controllers");

router.get("/users", roleMiddleware, UserControllers.getUser);
router.get("/users/:id(\\d+)", UserControllers.getUserDetail);
router.post("/users", roleMiddleware, UserControllers.addUser);
router.put("/users/:id(\\d+)", roleMiddleware, UserControllers.updateUser);
router.delete("/users/:id(\\d+)", UserControllers.deleteUser);

module.exports = router;
