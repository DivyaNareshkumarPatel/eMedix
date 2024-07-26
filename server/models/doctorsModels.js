const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hospitalName: { type: String, required: true },
  hospitalLocation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String }
});

module.exports = mongoose.model('Doctor', doctorSchema);
