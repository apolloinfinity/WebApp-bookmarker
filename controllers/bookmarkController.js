const Bookmark = require('../models/bookmarkModel');

exports.getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({});
    // res.render('index', {
    // 	bookmarks: bookmarks,
    // 	path: '/bookmark'
    // });
    res.json(bookmarks);
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
      res.json('Bookmark already exists!');
    } else {
      await bookmark.save();
      res.status(201).json(bookmark);
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

    let bookmark = await Bookmark.deleteOne({ _id: id });
    // bookmark.save();

    res.status(200).send('Bookmark deleted');
  } catch (err) {
    throw err;
  }
};
