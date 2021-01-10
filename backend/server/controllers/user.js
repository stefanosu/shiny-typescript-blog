const db = require("../models");
const Post = require("../models/post");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log(db);
    const data = await db.User.create({
      username,
      email,
      password,
    });
    console.log(data);
    res.status(201).send({
      message: "User successfully created",
      data,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserFavPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id: id },
      include: [
        {
          model: Post,
        },
      ],
    });
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send("User with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUserFavPostById,
};
