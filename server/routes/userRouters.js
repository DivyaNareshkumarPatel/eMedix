const express = require('express');
const { requestEmailVerification, verifyEmail, loginUser, forgotPassword, verifyOtp, resetPassword } = require('../controller/userController');
const router = express.Router();

router.post('/request-verification', requestEmailVerification);
router.get('/verify/:token', verifyEmail);
router.post('/login', loginUser);

router.post('/forgotPassword', forgotPassword);
router.post('/verifyOtp', verifyOtp);
router.post('/resetPassword', resetPassword);

module.exports = router;
