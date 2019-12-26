const { Router } = require('express');
const router = Router();

const { getBookmarks, postBookmark, deleteBookmark } = require('../controllers/bookmarkController');

router.get('/', getBookmarks);
// router.get('/bookmarks/:id', getBookmark);
router.post('/bookmark', postBookmark);
router.delete('/bookmark/:id', deleteBookmark);

module.exports = router;
