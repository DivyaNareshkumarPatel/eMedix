const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary.js');
const upload = multer({ storage });

const { addDoctor, updateDoctor, deleteDoctor, getDoctors } = require('../controller/doctorController.js');

router.post('/add', upload.single('image'), addDoctor);

router.put('/update/:id', upload.single('image'), updateDoctor);

router.delete('/delete/:id', deleteDoctor);

router.get('/', getDoctors);

module.exports = router;
