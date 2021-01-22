const db = require("../models");

const config = require("../config/auth.config")

const User = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(User);
    const data = await db.User.create({
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
    // console.log(data) //data is undefined 
    // console.log(db.User) //logs out User 
    // console.log(userId)//userId is undefined
    // console.log(req.body) // { username: 'steve', password: 'abc123' } logs out my user I signed in with
    // console.log(req.body.id) //undefined 
    // console.log(req.params.id) //undefined 
    // console.log(email)//undefined 

    const { username, password, email } = req.body;
    const { userId } = req.params;

    const userData = await db.User.findOne({where: {username} })
    console.log(userData)

    if (!userData) {
      return res.status(404).send({ message: "User Not found." });
    }
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        userData.password
      );
      console.log( req.body.password, userData.password, req.body.password === userData.password)

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      let token = jwt.sign({ id: userId }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
  
      console.log(userData);
        res.status(200).send({
            id: userId,
            username: userData.username,
            email: userData.email,
            accessToken: token,
        });
      }
      
    catch (error) {
        console.log(error.stack);
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
