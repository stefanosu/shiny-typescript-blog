import Users from '../controllers/user';

export default (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BlogPost API!',
  }));

  app.post('/api/users', Users.signUp); // API route for user to signup create user
};