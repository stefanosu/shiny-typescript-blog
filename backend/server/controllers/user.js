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

const login = async (req, res) => {
  console.log(user, 'USER')
    const { username, password } = req.body;
  // if the username / password is missing, we use status code 400
  // indicating a bad request was made and send back a message
  if (!username || !password) {
    return res.status(400).send(
      'Request missing username or password param'
    );
  }

  const user = await db.User.findOne({ username })
    console.log(user);
    if(user) {
      return res.json({
        id: userId, 
        username: user.username,
        password: user.password 
    }).send({message: "User successfully logged in."})
  } 
  console.log(message);
      res.status(401) 
        throw new Error('Invalid email or password')
}


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
  login
};
