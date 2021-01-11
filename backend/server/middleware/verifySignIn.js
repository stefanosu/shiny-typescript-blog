const db = require("../models");
const User = db.user;

const checkDuplicateUsernameOrEmail = (req, res) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }

    // Email
    console.log(User)
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }
      next();
    });
  });
};

const checkIfUserExists = (req, res) => {
  if (req.body.users) {
    // for (let i = 0; i < req.body.users.length; i++) {
      if (User != req.params.userId) {
        res.status(400).send({
          message: "Failed! User does not exist" 
        });
        return;
      }
    }
  }

const verifySignIn = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkIfUserExists: checkIfUserExists
};

module.exports = verifySignIn;
