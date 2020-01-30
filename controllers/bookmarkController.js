const Bookmark = require('../models/bookmarkModel');

exports.getBookmarks = async (req, res) => {
	try {
		const bookmarks = await Bookmark.find({});
		res.render('index', {
			bookmarks: bookmarks,
			path: '/bookmark'
		});
	} catch (err) {
		throw err;
	}
};

exports.postBookmark = async (req, res) => {
	try {
		const { name, url, user } = await req.body;
		console.log(req.body);
		const bookmark = Bookmark({
			name,
			url,
			user
		});

		const checkURL = await Bookmark.findOne({ url: url });
		if (checkURL) {
			console.log('That bookmark exists already!');
		} else {
			await bookmark.save();
			res.json(bookmark);
			console.log('Saved');
		}

		res.status(201);
		// res.status(201).send().end();
	} catch (err) {
		throw err;
	}
};

exports.deleteBookmark = async (req, res) => {
	try {
		const id = await req.params.id;
		const results = await Bookmark.deleteOne({ _id: id });
		// console.log(results);
		res.status(200).send();
	} catch (err) {
		throw err;
	}
};
