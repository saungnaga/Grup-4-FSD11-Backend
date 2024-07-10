const { Router } = require("express");
const router = Router();

const { BookingControllers } = require("../controllers");

router.get("/booking", BookingControllers.getBooking);
router.get("/booking/:id(\\d+)", BookingControllers.getBookingDetail);
router.post("/booking", BookingControllers.addBooking);
router.put("/booking/:id(\\d+)",  BookingControllers.updateBooking);
router.delete("/booking/:id(\\d+)", BookingControllers.deleteBooking);

module.exports = router;
