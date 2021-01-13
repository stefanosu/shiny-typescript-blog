const Users = require('../controllers/user');
const Posts = require('../controllers/post');


// const db = require('../models') 
const express = require('express'); 
const router = express.Router()



// app.get('/api/users', Users)
router.post('/signUp', Users.createUser)  // API route for user to signup

router.post('/login', Users.login); // API route for user login


// router.get("/getUsersFav", Posts.getUsersFavPosts); // API route for user to get all posts in the database

router.get("/getPosts", Posts.getAllPosts) //API route to get all posts 

router.put("/updatePost/:postId", Posts.updatePost); // API route for user to edit a post

router.delete("/deletePost/:postId", Posts.deletePost); // API route for user to delete a post

router.post("/createPosts", Posts.createPost);

module.exports = router 
