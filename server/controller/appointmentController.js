const Appointment = require('../models/appointmentModels.js');

exports.bookAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).send({ success: true, appointment });
    } catch (error) {
        res.status(400).send({ success: false, error: error.message });
    }
};
