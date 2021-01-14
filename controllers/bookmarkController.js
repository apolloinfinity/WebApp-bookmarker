const Bookmark = require('../models/bookmarkModel');

exports.getBookmarks = async (req, res) => {
	try {
		const bookmarks = await Bookmark.find({});

		return res.status(200).json(bookmarks);
	} catch (err) {
		throw err;
	}
};

exports.postBookmark = async (req, res) => {
	try {
		const { name, url, user } = await req.body;
		// console.log(req.body);
		const bookmark = Bookmark({
			name,
			url,
			user,
		});

		const checkURL = await Bookmark.findOne({ url: url });
		if (checkURL) {
			return res.json('Bookmark already exists!');
		} else {
			await bookmark.save();
			console.log('Saved');
			return res.status(201).json(bookmark);
		}
	} catch (err) {
		throw err;
	}
};

exports.deleteBookmark = async (req, res) => {
	try {
		const id = await req.params.id;

		await Bookmark.deleteOne({ _id: id });

		return res.status(200).send('Bookmark deleted');
	} catch (err) {
		throw err;
	}
};
