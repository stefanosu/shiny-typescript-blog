import React, { useState } from 'react';
import './App.css';
import NewPost from './components/NewPost';
// import DogImage from './components/DogImage';
// import UserRegister from './components/UserRegister'
// import { DogImageType } from './components/DogImage';
import Post , {SinglePost} from './components/Post'


// const dummyEditPost = (number: number) => {
//    console.log("dummy edit")
// }

// const dummyDeletePost = (number: number) => {
//   console.log("dummy delete")
// }

//  const ReactFCComponent: React.FC<{title:string}> = ({children, title}) => {
  
  const App:React.FC = ()  => {
  const [value, setValue] = useState('')

  return (

    <NewPost handleChange={(param) => setValue(param.target.value)}/>
    // <>
    // <Post ({
    //   title = "title", 
    //   content = "body", 
    //   id = 1, 
    //   editPost = dummyEditPost(id: 2), 
    //   deletePost= dummyDeletePost(id: 3)})/>
    //   </>
    ) 
}


export default App;
