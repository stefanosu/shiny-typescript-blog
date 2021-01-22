const db = require("../models");
// const Post = require("../models/post");

const { Post, User } = db;


const createPost = async (req, res) => {
  try {
    const { title, content, favorite, userId } = req.body;
    console.log(userId)
    const postData = await Post.create({
      title,
      content,
      favorite,
      userId,
    });
    res.status(201).send({
      success: true,
      message: "Post successfully created",
      postData,
    });
    console.log(postData)
    // console.log(userId)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPosts = async (req, res) => {
  
  try {
    console.log(Post)
    const posts = await Post.findAll({
      attributes: ['title', 'content', 'favorite', 'userId'],
    });
    console.log(posts);
    return res.status(200).json({ posts: posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};



const getUsersFavPosts = async (req, res) => { 
  try {
    const favPosts = await Post.findAll({
      where : { user_id : req.post.favorite } // <----- HERE
      // include: [{
      //     model: User,
      //     attributes: ['id', 'nick']
      // }]
    }) 
    return res.status(200).json({ favPosts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, content, favorite } = req.body;
    const { postId } = req.params;
    // console.log(req.params, "params");
    // console.log(postId, "ID");
    // console.log(db.Post, "postModel");

    const post = await Post.findOne({ where: { id: postId } });
    if (post === null) {
      return res.status(400).json({ message: "Post Not Found" });
    } else {
      const updatedPost = await post.update({
        title: title || post.title,
        content: content || post.content,
        favorite: favorite || post.favorite,
      });
      return res.status(200).json({ post: updatedPost });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    console.log(postId, "ID");
    console.log(req.params, "params");
    console.log(postId, "ID");
    const deleted = await db.Post.destroy({
      where: { id: postId },
    });
    if (deleted) {
      return res.status(204).send( { message: "Post deleted" });
    }
    throw new Error("Post not found");
  } catch (error) {
    console.log(error.stack)
    return res.status(500).send(error.message);
    
  }
};

module.exports = {
  createPost,
  getUsersFavPosts,
  updatePost,
  deletePost,
  getAllPosts,
};
