const express = require("express");
const router = express.Router();
const postController = require("../../controllers/postController");

router
  .get("/", postController.getAllPosts)
  .get("/:postId", postController.getOnePost)
  .post("/", postController.createNewPost)
  .delete("/:postId", postController.deleteOnePost);

module.exports = router;
