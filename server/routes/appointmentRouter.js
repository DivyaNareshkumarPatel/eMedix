const express = require('express');
const authMiddleware = require('../middleware/authMiddleware.js')

const router = express.Router();

const { bookAppointment, getAppointmentsByUser, getDoctorAppointments } = require('../controller/appointmentController.js');

router.post('/', bookAppointment);
router.get('/:userId', authMiddleware, getAppointmentsByUser);
router.get('/doctor/:doctorId', authMiddleware, getDoctorAppointments);

module.exports = router;