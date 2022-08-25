const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const bookmarks = require('./routes/bookmark.routes');
const port = process.env.PORT || 5050;

db = process.env.MONGO_URI;

// const demoLogger = require('./helpers/logger');

const start = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'bookmarks',
    });
    console.log('Connected to MongoDB');

    const app = express();

    app.use(cors());

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // update to match the domain you will make the request from
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // app.use(demoLogger);
    // app.use(express.static('public'));

    app.use('/api', bookmarks);

    app.listen(port, () => console.log(`Listening on port: ${port}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
