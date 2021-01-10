import React from 'react';
import './App.css';
import NewPost from './components/NewPost';
import Post from './components/Post'
import UserSignUp from './components/UserSignUp'

const App = ()  => {
  return (
    <>
      <h1>Hello World!!!</h1>
      <Post />
      {/* <UserSignUp /> */}
      <NewPost /> 
    </>
    )
}

export default App;
