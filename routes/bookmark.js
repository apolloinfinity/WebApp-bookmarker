const { Router } = require('express');
const router = Router();

const {
	getBookmarks,
	getBookmark,
	postBookmark,
	updateBookmark,
	deleteBookmark
} = require('../controllers/bookmarkController');

router.get('/', getBookmarks);
router.get('/bookmarks/:id', getBookmark);
router.post('/bookmark', postBookmark);
router.delete('/bookmarks/:id', deleteBookmark);

module.exports = router;
