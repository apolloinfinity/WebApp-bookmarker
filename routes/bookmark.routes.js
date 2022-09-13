const { Router } = require("express");
const router = Router();

const logger = require("../helpers/logger");

const {
  getBookmarks,
  postBookmark,
  deleteBookmark,
  updateBookmark,
} = require("../controllers/bookmark.controller");

router.use(logger);

router.get("/bookmark/:id", updateBookmark);
router.patch("/bookmark/:id", updateBookmark);
router.delete("/bookmark/:id", deleteBookmark);
router.post("/bookmark", postBookmark);
router.get("/bookmark", getBookmarks);

module.exports = router;
