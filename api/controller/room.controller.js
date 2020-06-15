const Room = require('../../model/room.model');

//get rooms
module.exports.index = async (req, res) => {
  let rooms = await Room.find();
  res.json({rooms});
}

// create room
module.exports.create = async (req, res) => {
  let room = new Room(req.body);
  await room.save();
  res.json(await Room.find());
}