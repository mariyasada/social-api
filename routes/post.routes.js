const express = require("express");
const {
  addPost,
  getPosts,
  getPost,
  updateViewCount,
  deletePost,
  getUserFeed,
} = require("../controller/post.controller");

const isAuthenticated = require("../middleware/isAuthenticated");
const router = express.Router();

router
  .route("/posts")
  .post(isAuthenticated, addPost)
  .get(isAuthenticated, getPosts);

router.route("/posts/feed").get(isAuthenticated, getUserFeed)
router
  .route("/post/:postId")
  .get(isAuthenticated, getPost)
  .patch(isAuthenticated, updateViewCount)
  .delete(isAuthenticated, deletePost);

module.exports = router;
