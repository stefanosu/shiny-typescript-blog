const User = require('../models').User;
const Post = require('../models').Post;

module.exports = {
  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Post,
          as: 'posts'
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: Post, as: 'posts' }, 'createdAt', 'DESC'],
        ],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return User
      .findByPk(req.params.id, {
        include: [{
          model: Post,
          as: 'posts'
        }],
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User is not found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },

  add(req, res) {
    return User
      .create({
        user_name: req.body.user_name,
        password: req.body.password,
        email: req.body.email,
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
      .findByPk(req.params.id, {
        include: [{
          model: Post,
          as: 'posts'
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User is not found',
          });
        }
        return user
          .update({
            user_name: req.body.user_name,
            password: req.body.password,
            email: req.body.email,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User
      .findByPk(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User is not found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};