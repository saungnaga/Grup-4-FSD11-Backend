const express = require('express');
const router = express.Router();
const Room = require('../models/room'); // Import the Room model

// GET all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET room by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findByPk(id);
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
  const { propertyId, totalBedroom, bedType, photoURL } = req.body;
  try {
    const newRoom = await Room.create({
      propertyId,
      totalBedroom,
      bedType,
      photoURL,
    });
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update room by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { propertyId, totalBedroom, bedType, photoURL } = req.body;
  try {
    let room = await Room.findByPk(id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    room = await room.update({
      propertyId,
      totalBedroom,
      bedType,
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
    const room = await Room.findByPk(id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    await room.destroy();
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;