const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: String,
  location: String,
  contactNumbers: [String],
  emails: [String],
  workingHours: {
    monSat: String,
    sunday: String,
  },
  hospitalPhoto: String,
  displayPhoto: String,
});

module.exports = mongoose.model('Hospital', hospitalSchema);