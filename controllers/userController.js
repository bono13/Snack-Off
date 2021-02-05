// Controller from user related routes
const { validationResult } = require('express-validator');

const User = require('../models/userModel');

const fetchUser = async (params) => {
  return await User.findOne(params);
}

exports.getLogin = async (req, res) => {
	try {
		await res.render('user/login', { errors: null, path: '/login' });
	} catch (err) {
		console.log(err);
	}
}

exports.postLogin = async (req, res) => {
	try {
		const user = fetchUser(req.body);
		if (!user) {
			console.log('user not found');
			return res.render('user/login', { errors: [{ msg: 'User not found',}], path: '/login' });
		} else {
			return res.render('generic/index', { path: '/' });
		}
	} catch (err) {
		console.log(err);
	}
}

exports.getRegister = async (req, res) => {
	try {
		await res.render('user/register', { errors: null, path: '/register' });
	} catch (err) {
		console.log(err);
	}
}

exports.postRegister = async (req, res) => {
	const user = await fetchUser({ email: req.body.email });
	if (!user) {
		try {
			const user = new User(req.body);
			await user.save();
			return res.status(200).redirect('/');
		} catch (err) {
			console.log(err);
		}
	} else {
    return res.render('user/register', { errors: [{ msg: 'User with this email address already exists!' }], path: '/register' });
	}

};
