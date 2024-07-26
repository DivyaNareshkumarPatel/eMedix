const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hospitalName: { type: String, required: true },
  hospitalLocation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  availability: { type: Boolean, default: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);
