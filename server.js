const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const db = require('./config/db').mongoURI;
const bookmarks = require('./routes/bookmark');

const start = async () => {
	try {
		await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log('Connected to MongoDB');

		const app = express();

		app.use(cors());
		app.use(express.json());
		app.use(express.urlencoded({ extended: false }));
		app.set('view engine', 'ejs');

		app.set('views', 'views');
		app.use(express.static(path.join(__dirname, 'public')));
		app.use('/', bookmarks);

		const port = process.env.PORT || 5000;
		app.listen(port, () => console.log(`Listening on port: ${port}`));
	} catch (err) {
		console.error(err);
	}
};

start();
