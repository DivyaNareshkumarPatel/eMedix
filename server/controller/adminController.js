const Admin = require('../models/adminModels.js');

exports.login = async (req, res) => {
  try {
    console.log('Login function called');
    const { email, password } = req.body;
    console.log('Received email:', email);
    console.log('Received password:', password);

    const admin = await Admin.findOne({ email });
    console.log('Admin found:', admin);

    if (!admin) {
      console.log('No admin found with this email.');
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await admin.comparePassword(password);
    console.log('Is password valid:', isPasswordValid);

    if (!isPasswordValid) {
      console.log('Password does not match.');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = admin.generateToken();
    res.status(200).json({ token });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getAdminData = (req, res) => {
  res.status(200).json({ message: 'Admin data fetched successfully' });
};
