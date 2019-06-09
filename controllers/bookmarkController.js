const mongoose = require('mongoose');

const Bookmark = require('../models/bookmarkModel');

exports.getBookmarks = async (req, res) => {
    try {
        Bookmark.find({}, (err, bookmarks) => {
            if (err) {
                res.sendStatus(400);
            } else {

                res.send(bookmarks);
            }

        })
    } catch (err) {
        console.error(err);
    }
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