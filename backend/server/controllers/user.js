const db = require("../models");

const { User } = db;

const { User, Post } = require("../models");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const data = await db.User.create({
      username,
      email,
      password,
    });
    res.status(201).send({
      success: true,
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
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getUserFavPostById,
};

// class Users {
//   static signUp(req, res) {
//     const { username, email, password } = req.body
//       return User
//         .create({
//           username,
//           email,
//           password
//         })
//         .then(userData => res.status(201).send({
//           success: true,
//           message: 'User successfully created',
//           userData
//         }))
//     }
// }

// export default Users;
