const express = require("express");
const router = express.Router();
const BookingControllers = require('../controllers');


router.get("/boking", BookingControllers.getBoking);
router.post("/boking", BookingControllers.createBoking);
router.patch("/boking", BookingControllers.updateBoking);
router.delete("/boking", BookingControllers.deleteBoking);

module.exports = router;




