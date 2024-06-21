const { Router } = require("express");
const router = Router();

const { PropertyControllers } = require("../controllers");

router.get("/properties", PropertyControllers .getProperty);
router.get("/properties/:id(\\d+)", PropertyControllers .getPropertyDetail);
router.post("/properties", PropertyControllers .addProperty);
router.put("/properties/:id(\\d+)",  PropertyControllers .updateProperty);
router.delete("/properties/:id(\\d+)", PropertyControllers .deleteProperty);

module.exports = router;
