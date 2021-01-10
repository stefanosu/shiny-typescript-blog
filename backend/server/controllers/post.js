const db = require("../models");

const { Post, User } = db;

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


const getAllPosts = async(req, res) => {
  try {
    const posts = await db.Post.findAll()
    console.log(posts.every(post => post instanceof Post)); // true
    console.log("All posts:", JSON.stringify(posts, null, 2));
    console.log(posts)
    res.status(201).send({posts, message: 'Retrieved all Posts'})
  } catch (e) {
    return res.status(500).json({error: error.message})
  }
}


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
    const { postId } = req.params;
    // console.log(req.params, 'params')
    console.log(postId, "ID");
    console.log(db.Post, "postModel");

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
  console.log(req.params,"params");

  try {
    const { postId } = req.params;
    console.log(postId, "ID");

    const post = await Post.findOne({ where: { id: postId } });
    post.destroy({ post });
    
    if (post) {
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
  getAllPosts
};
