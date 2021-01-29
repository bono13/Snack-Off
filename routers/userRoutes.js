// Handle user routes
const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create', userController.postAddUser);

module.exports = router;
