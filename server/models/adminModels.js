const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  message: { type: String } // Optional message field
});

adminSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

adminSchema.methods.comparePassword = function (password) {
  return password===this.password;
};

adminSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = mongoose.model('Admin', adminSchema);
