const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary.js');
const upload = multer({ storage });
const authMiddleware = require('../middleware/authMiddleware.js')
const { addDoctor, updateDoctor, deleteDoctor, getDoctors, getDoctorsByHospitalName, login, getDoctorById } = require('../controller/doctorController.js');

router.post('/add', upload.single('image'), addDoctor);
router.put('/update/:id', upload.single('image'), updateDoctor);
router.delete('/delete/:id', deleteDoctor);
router.get('/', getDoctors);
router.get('/hospital/:hospitalName', getDoctorsByHospitalName);
router.post('/login', login);
router.get('/:id', getDoctorById);

module.exports = router;