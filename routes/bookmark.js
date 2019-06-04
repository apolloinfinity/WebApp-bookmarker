const express = require('express');

const router = express.Router();

const bookmarks = require('../controllers/bookmarkController');

router.get('/bookmarks', bookmarks.getBookmarks);
router.post('/bookmarks', bookmarks.postBookmarks);
router.delete('/bookmarks', bookmarks.deleteBookmark);

module.exports = router;