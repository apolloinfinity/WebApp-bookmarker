const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const db = require('./config/db').mongoURI;
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error(err));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'client')));
app.use('/api', require('./routes/bookmark'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
