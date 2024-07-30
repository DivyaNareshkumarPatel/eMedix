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

exports.getAppointmentsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const appointments = await Appointment.find({ userId }).populate('docId').exec();
    // res.json({ appointments });
    res.status(200).send({ success: true, appointments });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

exports.getDoctorAppointments = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const appointments = await Appointment.find({ docId: doctorId }).populate('userId').exec();

    if (appointments.length === 0) {
      return res.status(404).send({ success: false, message: 'No appointments found' });
    }

    res.status(200).send({ success: true, appointments });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    console.error('Error fetching appointment details:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
