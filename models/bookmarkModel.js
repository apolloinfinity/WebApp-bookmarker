const { Schema, model } = require('mongoose');

const BookmarkSchema = new Schema({
	name: String,
	url: String,
	user: String,
	created: { type: Date, default: Date.now },
});

module.exports = Bookmark = model('bookmark', BookmarkSchema);
