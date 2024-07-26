const express = require('express');
const router = express.Router();
const { bookAppointment } = require('../controller/appointmentController.js');

router.post('/', bookAppointment);

module.exports = router;