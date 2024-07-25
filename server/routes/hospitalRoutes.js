const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinary.js');
const { addHospital, getAllHospitals, updateHospital, deleteHospital } = require('../controller/hospitalController.js');

const router = express.Router();
const upload = multer({ storage: storage });

router.post('/hospitalData', upload.fields([{ name: 'hospitalPhoto', maxCount: 1 }, { name: 'displayPhoto', maxCount: 1 }]), addHospital);
router.get('/', getAllHospitals);

router.put('/:id', updateHospital);

router.delete('/:id', deleteHospital);

module.exports = router;