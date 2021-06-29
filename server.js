const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const bookmarks = require('./routes/bookmark.routes');
const port = process.env.PORT || 5000;

db = process.env.MONGO_URI;

// const demoLogger = require('./helpers/logger');

const start = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: 'bookmarks'
		});
		console.log('Connected to MongoDB');

		const app = express();

		app.use(cors());
		app.use(express.urlencoded({ extended: true }));
		app.use(express.json());

		// app.use(demoLogger);
		app.use(express.static('public'));

		app.get('/', (req, res) => {
			res.sendFile(path.join(__dirname, 'public/'));
		});
		app.use('/api', bookmarks);

		app.listen(port, () => console.log(`Listening on port: ${port}`));
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

start();
