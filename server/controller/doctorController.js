const Doctor = require('../models/doctorsModels.js'); // Import the Doctor model

const addDoctor = async (req, res) => {
  try {
    const { name, hospitalSpecialities, contactNumber, email } = req.body;
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
      hospitalSpecialities,
      contactNumber,
      email,
      image: imageUrl
    });

    await newDoctor.save(); // Save the doctor to the database

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
      const { name, hospitalSpecialities, contactNumber, email } = req.body;
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
        { name, hospitalSpecialities, contactNumber, email, image: imageUrl },
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

module.exports = {
  addDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctors
};
