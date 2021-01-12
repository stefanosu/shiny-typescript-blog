const jwt = require("jsonwebtoken");
// const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};



// const isUser = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//         if (user.userId === 'userId') {
//           next();
//           // return;
//           res.status(202).send({message: "Is correct user"})
//         }
//       })

//       res.status(403).send({
//         message: "Required User!"
//     });
//   }
  


const authUser = {
  verifyToken: verifyToken,
  isUser: isUser,
};
module.exports = authUser;
