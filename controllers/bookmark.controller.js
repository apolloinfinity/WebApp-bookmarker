const Bookmark = require('../models/bookmark.model');

exports.getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({});

    return res.status(200).json({ data: bookmarks });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

exports.postBookmark = async (req, res) => {
  try {
    const { url, user, urlName } = await req.body;
    const bookmark = Bookmark({
      url,
      urlName,
      user,
    });

    const checkURL = await Bookmark.findOne({ url: url });
    if (checkURL) {
      return res.json('Bookmark already exists!');
    } else {
      await bookmark.save();
      console.log('Saved');
      return res.status(201).json({ data: bookmark });
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

exports.updateBookmark = async (req, res) => {
  try {
    const id = await req.params.id;
    const url = await req.body.url;
    const urlName = await req.body.urlName;

    await Bookmark.findOneAndUpdate({ _id: id }, { url, urlName });

    return res.status(200).json({ data: `Bookmark updated` });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteBookmark = async (req, res) => {
  try {
    const id = await req.params.id;

    await Bookmark.deleteOne({ _id: id });

    return res.status(200).json({ data: 'Bookmark deleted' });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
