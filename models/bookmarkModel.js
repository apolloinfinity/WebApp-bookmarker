const { Schema, model } = require('mongoose');

const BookmarkSchema = new Schema({
	name: String,
	url: String,
	date: { type: Date, default: Date.now }
});

module.exports.Bookmark = model('bookmarks', BookmarkSchema);
