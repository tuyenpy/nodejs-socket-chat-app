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

//get message
module.exports.getMessage = async (req, res) => {
  let room = req.query.room;
  let messages = (await Room.findOne({name: room})).messages;
  res.json(messages);
}

// send-message
module.exports.sendMessage = async (req, res) => {
  let { room, userName, text } = req.body;
  let newRoom = await Room.findOneAndUpdate({
    name: room
  }, {
    $push: {
      'messages': {userName, text}
    }
  }, {
    new: true
  })
  res.json(newRoom);
}