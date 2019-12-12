const mongoose = require('mongoose');

const Bookmark = require('../models/bookmarkModel');

exports.getBookmarks = async (req, res) => {
	try {
		const bookmarks = await Bookmark.find({});
		res.render('index', {
			bookmarks
		});
	} catch (err) {
		throw err;
	}
};
exports.getBookmark = async (req, res) => {
	try {
		const id = req.params.id;
		const results = await Bookmark.find({ _id: id });
		// console.log(results);
		res.send(results);
		console.log(id);
		// res.status(200).send(results);
	} catch (err) {
		throw err;
	}
};

exports.postBookmark = async (req, res) => {
	try {
		const { siteName, url } = req.body;
		console.log(req.body);
		const bookmark = Bookmark({
			siteName,
			url
		});
		const checkURL = await Bookmark.findOne({ url: url });
		if (checkURL) {
			console.log('That bookmark exists already!');
		} else {
			bookmark.save();
			console.log('Saved');
		}
		res.redirect('index');
		res.status(201).send().end();
	} catch (err) {
		throw err;
	}
};

exports.updateBookmark = async (req, res) => {
	res.send('Update bookmark');
};

exports.deleteBookmark = async (req, res) => {
	try {
		const id = await req.params.id;
		const results = await Bookmark.deleteOne({ _id: id });
		console.log(results);
		res.status(200).send(Bookmark.deletedCount);
	} catch (err) {
		throw err;
	}
};
