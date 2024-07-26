const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  docId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Date, required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  gender: { type: String, required: true },
  message: { type: String },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
