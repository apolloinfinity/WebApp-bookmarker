const { Router } = require('express');
const router = Router();

const logger = require('../helpers/logger');

const {
  getBookmarks,
  postBookmark,
  deleteBookmark,
} = require('../controllers/bookmarkController');

router.use(logger);

router.get('/bookmark', getBookmarks);
router.post('/bookmark', postBookmark);
router.delete('/bookmark/:id', deleteBookmark);

module.exports = router;
