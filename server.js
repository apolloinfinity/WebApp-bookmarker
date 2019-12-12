const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const db = require('./config/db').mongoURI;
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error(err));

const app = express();

const bookmarks = require('./routes/bookmark');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', express.static(path.join(__dirname, 'cl')));
app.use('/', bookmarks);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
