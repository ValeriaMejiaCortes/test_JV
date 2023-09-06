const Post = require("../database/Post");
const { v4: uuid } = require("uuid");

const getAllPosts = () => {
  const allPosts = Post.getAllPosts();
  return allPosts;
};

const getOnePost = (postId) => {
  const post = Post.getOnePost(postId);
  return post;
};

const createNewPost = (newPost) => {
  const postToInsert = {
    ...newPost,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  const createdPost = Post.createNewPost(postToInsert);
  return createdPost;
};

const deleteOnePost = (postId) => {
  Post.deleteOnePost(postId);
};

module.exports = {
  getAllPosts,
  getOnePost,
  createNewPost,
  deleteOnePost,
};
