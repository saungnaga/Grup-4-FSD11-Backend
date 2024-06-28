const { Router } = require("express");
const router = Router();

const { ImageControllers } = require("../controllers");

router.get("/images", ImageControllers.getImage);
router.get("/images/:id(\\d+)", ImageControllers.getImageDetail);
router.post("/images", ImageControllers.addImage);
router.put("/images/:id(\\d+)",  ImageControllers.updateImage);
router.delete("/images/:id(\\d+)", ImageControllers.deleteImage);

module.exports = router;
