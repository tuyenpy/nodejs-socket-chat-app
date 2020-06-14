const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  messages: [{
    userName: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }]
})

const Room = model("Room", roomSchema);

module.exports = Room;