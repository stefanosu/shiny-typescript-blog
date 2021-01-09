import Users from '../controllers/user';
import Posts from '../controllers/post';

export default (app) => {

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Blog API!',
}));

app.post('/api/users', Users.signUp); // API route for user to signup

app.post('/api/users/:userId/posts', Posts.create); // API route for user to create a post


app.get('/api/posts', Posts.list); // API route for user to get all posts in the database


app.put('/api/posts/:postID', Posts.modify); // API route for user to edit a post

}