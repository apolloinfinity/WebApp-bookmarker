const mongoose = require('mongoose');

const Bookmark = require('../models/bookmarkModel');

exports.getBookmarks = async (req, res) => {
    Bookmark.find({}, (err, bookmark) => {
        if (err) {
            console.error(err);
        } else {
            res.sendStatus(200).send();
        }
    })
}

exports.postBookmarks = async (req, res) => {
    const { name, url } = await req.body;
    const bookmark = new Bookmark({
        bookmarkName: await name,
        bookmarkURL: await url
    });

    await bookmark.save()
        .then(() => res.status(201).send())
        .catch(err => console.error(err))
    console.log("saved")
}

exports.updateBookmarkrs = async (req, res) => {
    res.send('Update bookmark')
}

exports.deleteBookmark = async (req, res) => {
    res.send('Delete bookmark');
}