const mongoose = require('mongoose');

const Bookmark = require('../models/bookmarkModel');

exports.getBookmarks = async (req, res) => {
    try {
        const results = await Bookmark.find({});
        // console.log(results);
        // res.send(results);
        res.status(200).send(results);
    } catch (err) {
        throw err;
    }
}
exports.getBookmark = async (req, res) => {
    try {
        const id = req.params.id
        const results = await Bookmark.find({ _id: id });
        // console.log(results);
        res.send(results);
        console.log(id)
        // res.status(200).send(results);
    } catch (err) {
        throw err;
    }
}

exports.postBookmark = async (req, res) => {
    const { name, url } = await req.body;
    console.log(req.body.url)
    const bookmark = new Bookmark({
        name: await name,
        url: await url
    });

    await bookmark.save()
        .then(() => res.status(201).send())
        .catch(err => console.error(err))
    console.log("saved")
}

exports.updateBookmark = async (req, res) => {
    res.send('Update bookmark')
}

exports.deleteBookmark = async (req, res) => {
    try {
        const id = await req.params.id
        const results = await Bookmark.deleteOne({ _id: id });
        console.log(results)
        res.status(200).send(Bookmark.deletedCount);
    } catch (err) {
        throw err;
    }
}