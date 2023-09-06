const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllPosts = () => {
  return DB.posts;
};

const createNewPost = (newPost) => {
  const isAdded =
    DB.posts.findIndex((post) => post.title === newPost.title) > -1;

  if (isAdded) return;

  DB.posts.push(newPost);
  saveToDatabase(DB);
  return newPost;
};

const getOnePost = (postId) => {
  const post = DB.posts.find((post) => post.id === postId);

  if (!post) return;
  return post;
};

const deleteOnePost = (postId) => {
  const indexPostToDelete = DB.posts.findIndex((post) => post.id === postId);

  if (indexPostToDelete === -1) return;

  DB.posts.splice(indexPostToDelete, 1);
  saveToDatabase(DB);
};

module.exports = { getAllPosts, createNewPost, getOnePost, deleteOnePost };
