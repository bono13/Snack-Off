// Controller from user related routes

const User = require('../models/userModel');

exports.postAddUser = async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		console.log('USER ADDED');
		res.status(200).json('Created new User');
	} catch (err) {
		console.log(err);
	}
};
