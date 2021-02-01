// Controller from user related routes

const User = require('../models/userModel');

exports.getLogin = async (req, res) => {
	try {
		await res.render('user/login', { error: false, path: '/login' });
	} catch (err) {
		console.log(err);
	}
}

exports.postLogin = async (req, res) => {
	try {
		const user = await User.findOne(req.body);
		if (!user) {
			res.render('user/login', { error: true, path: '/login' });
		} else {
			res.render('generic/index', { path: '/' });
		}
		console.log(user);
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
