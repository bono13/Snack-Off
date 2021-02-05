const { body, validationResult } = require('express-validator');

exports.loginValidator = [
    body('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Please enter a valid email!'),
    body('password')
        .isLength({ min: 3 })
        .withMessage('Please enter a valid password!'),
    (req, res, next ) => {
        const errors = validationResult(req);
		if (!errors.isEmpty()) {
            return res.render('user/login', { errors: errors.array(), path: '/login' });
        }
        next();
    }
]

exports.registrationValidator = [
    body('firstName')
        .isLength({ min: 3 })
        .trim()
        .escape()
        .withMessage('Please enter a valid first name!'),
    body('lastName')
        .isLength({ min: 3 })
        .trim()
        .escape()
        .withMessage('Please enter a valid surname!'),
    body('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Please enter a valid email!'),
    body('password')
        .isLength({ min: 3 })
        .withMessage('Please enter a valid password!'),
    (req, res, next ) => {
        const errors = validationResult(req);
		if (!errors.isEmpty()) {
            return res.render('user/register', { errors: errors.array(), path: '/register' });
        }
        next();
    }
]