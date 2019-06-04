const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = require('./config/db').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/bookmark'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));