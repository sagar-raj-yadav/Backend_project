const express = require('express');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.delete('/:id', authenticate, deleteUser);

module.exports = router;
