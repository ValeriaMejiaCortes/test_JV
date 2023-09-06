const postService = require("../services/postService");

const getAllPosts = (req, res) => {
  const allPosts = postService.getAllPosts();
  res.send({ status: "OK", data: allPosts });
};

const getOnePost = (req, res) => {
  const {
    params: { postId },
  } = req;

  if (!postId) return;

  const post = postService.getOnePost(postId);
  res.send({ status: "OK", data: post });
};

const createNewPost = (req, res) => {
  const { body } = req;

  if (!body.title || !body.text) {
    return;
  }

  const newPost = {
    title: body.title,
    text: body.text,
  };

  const createdPost = postService.createNewPost(newPost);
  res.status(201).send({ status: "OK", data: createdPost });
};

const deleteOnePost = (req, res) => {
  const {
    params: { postId },
  } = req;

  if (!postId) return;

  postService.deleteOnePost(postId);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllPosts,
  getOnePost,
  createNewPost,
  deleteOnePost,
};
