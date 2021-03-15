const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const bookmarks = require('./routes/bookmark.routes');

db = process.env.MONGO_URI;

// const demoLogger = require('./helpers/logger');

const start = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'bookmarks',
    });
    console.log('Connected to MongoDB');

    const app = express();

    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.set('view engine', 'ejs');

    // app.use(demoLogger);

    app.set('views', 'views');
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/api', bookmarks);

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/'));
    });

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Listening on port: ${port}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
