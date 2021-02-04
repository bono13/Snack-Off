// Controller from user related routes
const { validationResult } = require('express-validator');

const User = require('../models/userModel');

exports.getLogin = async (req, res) => {
	try {
		await res.render('user/login', { errors: null, path: '/login' });
	} catch (err) {
		console.log(err);
	}
}

exports.postLogin = async (req, res) => {
	try {
		const user = await User.findOne(req.body);
		if (!user) {
			console.log('user not found');
			return res.render('user/login', { errors: [{ msg: 'User not found' }], path: '/login' });
		} else {
			return res.render('generic/index', { path: '/' });
		}
	} catch (err) {
		console.log(err);
	}
}

exports.getRegister = async (req, res) => {
	try {
		await res.render('user/register', { path: '/register' });
	} catch (err) {
		console.log(err);
	}
}

exports.postRegister = async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.status(200).redirect('/');
	} catch (err) {
		console.log(err);
	}
};
