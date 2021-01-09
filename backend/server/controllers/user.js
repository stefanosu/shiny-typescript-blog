import model from '../models/user';

const { User } = model 

class Users {
  static signUp(req, res) {
    const { username, email, password } = req.body
      return User
        .create({
          username,
          email,
          password
        })
        .then(userData => res.status(201).send({
          success: true,
          message: 'User successfully created',
          userData
        }))
    }
}

export default Users;