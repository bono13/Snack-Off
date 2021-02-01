// Controller for generic routes

// Handle the index
exports.getIndex = async (req, res, next) => {
	res.render('generic/index.ejs', { path: '/'});
};
