const crypto = require('crypto');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const User = require('../models/userModels');
const path = require('path');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const transporter = require('../config/emailTransporter.js');

dotenv.config();

const tempUsers = new Map(); // Temporary storage for user data

exports.requestEmailVerification = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Generate a verification token
    const token = crypto.randomBytes(32).toString('hex');
    tempUsers.set(token, { name, email, password });

    // Create the verification URL
    const verificationUrl = `http://localhost:5000/api/users/verify/${token}`;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verify Your Email',
      text: `Click the link to verify your email: ${verificationUrl}`
    };

    // Send verification email
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

    // Check if email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).sendFile(path.join(__dirname, '../public/error.html'));
    }

    // Create a new user and save to database
    const user = new User({ name, email, password });
    await user.save();

    // Remove token from tempUsers
    tempUsers.delete(token);

    // Send success response
    res.status(200).sendFile(path.join(__dirname, '../public/success.html'));
  } catch (error) {
    console.error(error);
    res.status(400).sendFile(path.join(__dirname, '../public/error.html'));
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a token (optional, if using JWT for sessions)
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Respond with success
    res.status(200).json({
      message: 'Login successful',
      token // Send token to the client if using JWT
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
    user.resetPasswordToken = otp;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
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

  // Log the received email and OTP for debugging
  console.log(`Received email: ${email}, OTP: ${otp}`);
  
  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Log the stored OTP for debugging
    console.log(`Stored OTP: ${user.otp}`);

    // Compare the received OTP with the stored OTP
    if (user.otp === otp) {
      // Clear OTP after successful verification (optional)
      user.otp = undefined;
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
    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's password (ensure you hash the password)
    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};