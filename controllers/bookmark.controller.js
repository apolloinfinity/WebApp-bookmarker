const Bookmark = require('../models/bookmark.model');

exports.getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({});

    return res.status(200).json({ message: bookmarks });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

exports.postBookmark = async (req, res) => {
  try {
    const { description, url, user } = await req.body;
    // console.log(req.body);
    const bookmark = Bookmark({
      description,
      url,
      user,
    });

    const checkURL = await Bookmark.findOne({ url: url });
    if (checkURL) {
      return res.json('Bookmark already exists!');
    } else {
      await bookmark.save();
      console.log('Saved');
      return res.status(201).json({ message: bookmark });
    }
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

exports.deleteBookmark = async (req, res) => {
  try {
    const id = await req.params.id;

    await Bookmark.deleteOne({ _id: id });

    return res.status(200).json({ message: 'Bookmark deleted' });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};
