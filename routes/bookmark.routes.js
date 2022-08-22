const { Router } = require('express');
const router = Router();

const logger = require('../helpers/logger');

const {
  getBookmarks,
  postBookmark,
  deleteBookmark,
  updateBookmark,
} = require('../controllers/bookmark.controller');

router.use(logger);

router.patch('/bookmark/:id', updateBookmark);
router.delete('/bookmark/:id', deleteBookmark);
router.get('/bookmark', getBookmarks);
router.post('/bookmark', postBookmark);

module.exports = router;
