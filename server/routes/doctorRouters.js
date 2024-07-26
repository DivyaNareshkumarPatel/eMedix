const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary.js');
const upload = multer({ storage });

const { addDoctor, updateDoctor, deleteDoctor, getDoctors, getDoctorsByHospitalName, login } = require('../controller/doctorController.js');

router.post('/add', upload.single('image'), addDoctor);
router.put('/update/:id', upload.single('image'), updateDoctor);
router.delete('/delete/:id', deleteDoctor);
router.get('/', getDoctors);
router.get('/hospital/:hospitalName', getDoctorsByHospitalName);
router.post('/login', login);

module.exports = router;
