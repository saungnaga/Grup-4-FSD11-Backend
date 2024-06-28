const { Rooms } = require ("../models")

const getRoom = async (req, res, next) => {
    const data = await Rooms.findAll();
    return res.status(200).json(data);
};

const getRoomDetail = async (req, res, next) => {
    const data = await Rooms.findByPk(req.params.id);
    return res.status(200).json(data);
};

const addRoom = async (req, res, next) => {
    const { roomNumber, bedTypeDesc, photoURL } = req.body;

    const data = await Rooms.create({
        roomNumber,
        bedTypeDesc,
        photoURL,
    });
    return res.status(200).json(data);
};

const updateRoom = async (req, res, next) => {
    const { roomNumber, bedTypeDesc, photoURL } = req.body;
    
    const data = await Rooms.findByPk(req.params.id);

    data.roomNumber = roomNumber;
    data.bedTypeDesc = bedTypeDesc;
    data.photoURL = photoURL;

    await data.save();

    if (data) {
        await data.update(req.body);
        res.json(data);
    } else {
        return res.status(404).json({ error: 'Room not found' });
    }
};

const deleteRoom = async (req, res, next) => {
    const data = await Rooms.findByPk(req.params.id);
    if (data) {
        await data.destroy();
        res.json({ message: `Room Deleted` });
    } else {
        return res.status(404).json({ error: 'Room not found' });
    }
};

module.exports = {
    getRoom,
    getRoomDetail,
    addRoom,
    updateRoom,
    deleteRoom
}