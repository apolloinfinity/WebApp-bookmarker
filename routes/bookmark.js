const express = require('express');

const router = express.Router();

const bookmarks = require('../controllers/bookmarkController');

router.get('/bookmarks', bookmarks.getBookmarks);
router.get('/bookmarks/:id', bookmarks.getBookmark);
router.post('/bookmarks', bookmarks.postBookmark);
router.delete('/bookmarks/:id', bookmarks.deleteBookmark);

module.exports = router;