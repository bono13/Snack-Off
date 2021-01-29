// Imports
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// Declarations
const app = express();
const userRoutes = require('./routers/userRoutes');
const genericRoutes = require('./routers/genericRoutes');

// Set templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Use body parser to get request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add routes
app.use('/user', userRoutes);
app.use('/', genericRoutes);

// Get port
const port = process.env.PORT || 3000;

// Start database connection
mongoose.connect(
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	async (connection) => {
		// When connection is made try starting the server
		try {
			await app.listen(port, (result) => {
				console.log('server started on port', port);
			});
		} catch (err) {
			throw err;
		}
	}
);
