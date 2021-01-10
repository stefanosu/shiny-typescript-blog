const Users = require('../controllers/user');
const Posts = require('../controllers/post');

// const db = require('../models') 
const express = require('express'); 
const router = express.Router()

// const app = express()

// app.use(express.json())

// app.get('/api/users', Users)
router.post('/create-user', Users.createUser); // API route for user to signup


 // API route for user to create a post

router.get("/getUsersFav", Posts.getUsersFavPosts); // API route for user to get all posts in the database

router.put("/updatePosts/:postId", Posts.updatePost); // API route for user to edit a post

router.delete("/deletePosts/:postId", Posts.deletePost); // API route for user to delete a post

router.post("/createPosts", Posts.createPost);

module.exports = router 
