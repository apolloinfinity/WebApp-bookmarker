const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const db = require('./config/db').mongoURI;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

// Mongoose Schema
const BookmarkSchema = new mongoose.Schema({
    bookmarkName: String,
    bookmarkURL: String,
    date: { type: Date, default: Date.now }
});

const BookMark = mongoose.model('bookmarks', BookmarkSchema);


app.get('/bookmarks', (req, res) => {
    BookMark.find({}, function (err, bookmarks) {
        if (err) throw err;
        console.log(bookmarks)
        res.send(bookmarks)
    })
});

app.post('/bookmarks', async (req, res) => {
    const { name, url } = await req.body;
    const bookmark = new BookMark({
        bookmarkName: await name,
        bookmarkURL: await url
    });

    await bookmark.save().then(() => res.status(201).send())
        .catch(err => console.error(err))
    console.log("saved")

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));