const crypto = require('crypto');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const User = require('../models/userModels');
const path = require('path');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const transporter = require('../config/emailTransporter.js');

dotenv.config();

const tempUsers = new Map();

exports.requestEmailVerification = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    tempUsers.set(token, { name, email, password });

    const verificationUrl = `http://localhost:5000/api/users/verify/${token}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verify Your Email',
      text: `Click the link to verify your email: ${verificationUrl}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Verification email sent, please check your inbox' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'An error occurred while sending verification email' });
  }
};

exports.verifyEmail = async (req, res) => {
  const { token } = req.params;

  try {
    const tempUser = tempUsers.get(token);
    if (!tempUser) {
      return res.status(400).sendFile(path.join(__dirname, '../public/error.html'));
    }

    const { name, email, password } = tempUser;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).sendFile(path.join(__dirname, '../public/error.html'));
    }

    const user = new User({ name, email, password });
    await user.save();

    tempUsers.delete(token);

    res.status(200).sendFile(path.join(__dirname, '../public/success.html'));
  } catch (error) {
    console.error(error);
    res.status(400).sendFile(path.join(__dirname, '../public/error.html'));
  }
};

async function rehashPassword(email, newPassword) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await User.updateOne({ email }, { password: hashedPassword });
    console.log(`Password for ${email} has been re-hashed and updated.`);
  } catch (error) {
    console.error('Error re-hashing and updating password:', error);
  }
}

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log(`User found: ${user.email}, Password from DB: ${user.password}`);
    await rehashPassword(email, password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`Password match: ${isMatch}, Email: ${email}`);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User with this email does not exist' });
    }

    const otp = crypto.randomBytes(3).toString('hex').toUpperCase();
    user.otp = otp;
    user.otpExpiry = Date.now() + 3600000;
    await user.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is ${otp}. It is valid for one hour.`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'OTP sent to your email' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while sending OTP' });
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  console.log(`Received email: ${email}, OTP: ${otp}`);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    console.log(`Stored OTP: ${user.otp}`);
    
    if (Date.now() > user.otpExpiry) {
      return res.status(400).json({ message: 'OTP has expired' });
    }

    if (user.otp === otp) {
      user.otp = undefined;
      user.otpExpiry = undefined;
      await user.save();
      return res.status(200).json({ message: 'OTP verified successfully' });
    } else {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Error in resetPassword:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};