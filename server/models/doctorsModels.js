const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hospitalName: { type: String, required: true },
  hospitalLocation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  availability: { type: Boolean, default: true },
  message: { type: String }
});

doctorSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

doctorSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

doctorSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id, role: 'doctor' }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = mongoose.model('Doctor', doctorSchema);
