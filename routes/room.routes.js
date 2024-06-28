const { Router } = require("express");
const router = Router();

const { RoomControllers } = require("../controllers");

// GET all room details
router.get("/rooms", RoomControllers.getRoom);

// GET room details by ID
router.get("/rooms/:id(\\d+)", RoomControllers.getRoomDetail);

// POST create a new room
router.post("/rooms", RoomControllers.addRoom);

// PUT update room by ID
router.put("/rooms/:id(\\d+)", RoomControllers.updateRoom);

// DELETE room by ID
router.delete("/rooms/:id(\\d+)", RoomControllers.deleteRoom);

module.exports = router;