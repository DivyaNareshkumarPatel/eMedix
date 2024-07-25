const Hospital = require('../models/hospitalModels.js');

exports.addHospital = async (req, res) => {
  try {
    const { name, location, contactNumbers, emails, workingHoursMonSat, workingHoursSunday } = req.body;
    const hospitalPhoto = req.files.hospitalPhoto ? req.files.hospitalPhoto[0].path : null;
    const displayPhoto = req.files.displayPhoto ? req.files.displayPhoto[0].path : null;

    const newHospital = new Hospital({
      name,
      location,
      contactNumbers: JSON.parse(contactNumbers),
      emails: JSON.parse(emails),
      workingHours: {
        monSat: workingHoursMonSat,
        sunday: workingHoursSunday,
      },
      hospitalPhoto,
      displayPhoto,
    });

    await newHospital.save();
    res.status(201).json({ message: 'Hospital added successfully', hospital: newHospital });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json({ hospitals });
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a hospital
exports.updateHospital = async (req, res) => {
  const { id } = req.params;
  const { name, location, contactNumbers, emails, workingHoursMonSat, workingHoursSunday } = req.body;

  try {
    const hospital = await Hospital.findByIdAndUpdate(id, {
      name,
      location,
      contactNumbers,
      emails,
      workingHours: {
        monSat: workingHoursMonSat,
        sunday: workingHoursSunday,
      },
    }, { new: true });

    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }

    res.json(hospital);
  } catch (error) {
    console.error('Error updating hospital:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a hospital
exports.deleteHospital = async (req, res) => {
  const { id } = req.params;

  try {
    const hospital = await Hospital.findByIdAndDelete(id);

    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }

    res.json({ message: 'Hospital deleted' });
  } catch (error) {
    console.error('Error deleting hospital:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
