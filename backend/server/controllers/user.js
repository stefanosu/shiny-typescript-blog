const db = require("../models");
const Post = require("../models/post");

const User = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(User);
    const data = await User.create({
      username,
      email,
      password: bcrypt.hashSync(req.body.password),
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

const login = async (req, res) => {
  try {
    console.log(data)
    console.log(db.User) //user is not defined??
    const { userId } = req.params;
    const { username, password } = req.body;
    
    const data = await db.User.findOne({where: {id: userId},})
    
    if (!data) {
      return res.status(404).send({ message: "User Not found." });
    }
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

    
      console.log(data);
        res.status(200).send({
            id: userId,
            username: user.username,
            email: user.email,
            accessToken: token,
            data
        });
      }
      
    catch (error) {
      return res.status(500).json({ error: error.message });
    }
};

// const getUserFavPostById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findOne({
//       where: { id: id },
//       include: [
//         {
//           model: Post,
//         },
//       ],
//     });
//     if (user) {
//       return res.status(200).json({ user });
//     }
//     return res.status(404).send("User with the specified ID does not exists");
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// };

module.exports = {
  createUser,
  // getUserFavPostById,
  login,
};
