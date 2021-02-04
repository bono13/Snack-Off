// Handle user routes
const express = require('express');

const userController = require('../controllers/userController');
const userValidator = require('../validators/userValidators');

const router = express.Router();

router.get('/login', userController.getLogin);

router.post('/login', userValidator.loginValidator , userController.postLogin);

router.get('/register', userController.getRegister);

router.post('/register', userController.postRegister);

module.exports = router;
