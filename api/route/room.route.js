const express = require('express');
const router = express.Router();

const controller = require('../controller/room.controller');

//get rooms
router.get('/', controller.index);

//create room
router.post('/create', controller.create);

//get message
router.get('/message', controller.getMessage);

//send-message
router.post('/send', controller.sendMessage);


module.exports = router;