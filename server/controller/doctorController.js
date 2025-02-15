const Doctor = require('../models/doctorsModels.js');
const cloudinary = require('cloudinary').v2;
const jwt = require('jsonwebtoken')
const addDoctor = async (req, res) => {
  try {
    const { name, hospitalName, hospitalSpecialities, contactNumber, email } = req.body;
    let imageUrl = null;

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: 'doctors',
        format: 'png'
      });
      imageUrl = uploadResult.secure_url;
    }

    const newDoctor = new Doctor({
      name,
      hospitalName, // Include hospitalName in the doctor document
      hospitalSpecialities,
      contactNumber,
      email,
      image: imageUrl
    });

    await newDoctor.save();

    res.status(201).json({
      success: true,
      message: 'Doctor added successfully',
      data: newDoctor
    });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, hospitalName, hospitalSpecialities, contactNumber, email } = req.body;
    let imageUrl = null;

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: 'doctors',
        format: 'png'
      });
      imageUrl = uploadResult.secure_url;
    }

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { name, hospitalName, hospitalSpecialities, contactNumber, email, image: imageUrl },
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Doctor updated successfully',
      data: updatedDoctor
    });
  } catch (error) {
    console.error('Error updating doctor:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDoctor = await Doctor.findByIdAndDelete(id);

    if (!deletedDoctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Doctor deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      success: true,
      data: doctors
    });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const getDoctorsByHospitalName = async (req, res) => {
  try {
    const { hospitalName } = req.params;

    const doctors = await Doctor.find({ hospitalName }).exec();

    if (doctors.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No doctors found for this hospital',
      });
    }

    res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    console.error('Error fetching doctors by hospital name:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = password === doctor.password;
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = doctor.generateToken()
    res.json({ success: true, token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

const getDoctorById = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json({ success: true, doctor });
  } catch (error) {
    console.error('Error fetching doctor by ID:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch doctor details' });
  }
};

module.exports = {
  addDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctors,
  getDoctorsByHospitalName,
  login,
  getDoctorById
};
