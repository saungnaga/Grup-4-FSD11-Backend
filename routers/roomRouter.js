const express = require('express');
const router = express.Router();
const Property = require('../models/property'); 
const RoomDetail = require('../models/roomDetail');

// GET all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await RoomDetail.findAll({
      include: Property
    });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET room by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const room = await RoomDetail.findByPk(id, {
      include: Property
    });
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create a new room
router.post('/', async (req, res) => {
  const { property_id, bedType, roomNumber, photoURL } = req.body;
  try {
    // Check if the property exists
    const property = await Property.findByPk(property_id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    // Create the room detail
    const newRoomDetail = await RoomDetail.create({
      property_id,
      bedType,
      roomNumber,
      photoURL,
    });
    res.status(201).json(newRoomDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update room by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { bedType, roomNumber, photoURL } = req.body;
  try {
    // Find the room detail by ID
    let room = await RoomDetail.findByPk(id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    // Update the room detail
    room = await room.update({
      bedType,
      roomNumber,
      photoURL,
    });
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE room by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Find the room detail by ID
    const room = await RoomDetail.findByPk(id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    // Delete the room detail
    await room.destroy();
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;