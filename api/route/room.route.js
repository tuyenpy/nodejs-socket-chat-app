const express = require('express');
const router = express.Router();

const controller = require('../controller/room.controller');

//get rooms
router.get('/', controller.index);

//create room
router.post('/create', controller.create);


module.exports = router;