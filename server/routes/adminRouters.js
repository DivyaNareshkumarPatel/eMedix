const express = require('express');
const { login, getAdminData } = require('../controller/adminController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/adminlogin', login);
router.use(authMiddleware);
router.get('/admin-data', getAdminData);

module.exports = router;
