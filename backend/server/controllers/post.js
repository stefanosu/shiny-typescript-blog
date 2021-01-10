const db = require("../models");

const { Post } = db;

const { User } = require("../models");

const createPost = async (req, res) => {
  try {
    const { title, content, favorite } = req.body;
    const { userId } = req.params;
    const postData = await db.Post.create({
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
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUsersFavPosts = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Post,
        },
      ],
    });
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, content, favorite } = req.body;
    const { id } = req.params;
    const updatedPost = await db.Post.update({
      title: title || post.title,
      content: content || post.content,
      favorite: favorite || post.favorite,
    });
    if (updatedPost) {
      const updatePost = await Post.findOne({ where: { id: id } });
      return res.status(200).json({ post: updatePost });
    }
    res.status(201).send({
      success: true,
      message: "Post successfully created",
      postData,
    });
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(204).send("Post deleted");
    }
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPost,
  getUsersFavPosts,
  updatePost,
  deletePost,
};
