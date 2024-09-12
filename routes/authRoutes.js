const express = require('express');
const { register, login, refreshToken } = require('../controllers/authController');

router.post('/refresh-token', refreshToken);

module.exports = router;
