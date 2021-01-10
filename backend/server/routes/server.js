const Users = require("./controllers/user");
const Posts = require("./controllers/post");

const db = require('./models') 
const express = require('express') 

const app = express()

app.use(express.json())


app.use('/api/users', controller.Users)
app.post('/api/createUser', Users.createUser); // API route for user to signup


app.get('/users/:id', controllers.getUserById)

const logger = require('morgan');
app.use(logger('dev'))

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})


app.post("/", createPost); // API route for user to create a post

app.get("/posts", Posts.list); // API route for user to get all posts in the database

app.put("/posts/:postID", Posts.modify); // API route for user to edit a post

app.delete("/posts/:postId", Posts.delete); // API route for user to delete a post


  module.exports = app 
