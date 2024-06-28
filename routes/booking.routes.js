const express = require("express");
const router = express.Router();
const Bookingcontrollers = require('../controllers/bookings');


router.get("/boking", Bookingcontrollers.getBoking);
router.post("/boking", Bookingcontrollers.createBoking);
router.patch("/boking", Bookingcontrollers.updateBoking);
router.delete("/boking", Bookingcontrollers.deleteBoking);

module.exports = router;




