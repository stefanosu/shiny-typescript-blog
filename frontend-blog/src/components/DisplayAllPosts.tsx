import React, { useState, useEffect, useCallback } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import UpdatePost from "./UpdatePost";
import { useForm } from "react-hook-form";
import { getAllPosts } from '../API';

interface PostData {
  title: string;
  content: string;
  id: string;
  favorite: boolean;
}

export interface PostRemove {
  deletePosts:  (e: React.ChangeEvent<HTMLFormElement>) => void;
  onClick: React.MouseEventHandler;

}


const DisplayAllPosts = () => {
  const [posts, setPosts] = useState<PostObj[]>([]);
  console.log(posts)

  const { register, handleSubmit, setValue, errors } = useForm<PostData>();


  useEffect(() => {
    fetchAllPosts()
  }, [])

  const fetchAllPosts = ():void => {
    getAllPosts()
    .then(({ data: { posts } }: PostObj[] | any) => setPosts(posts))
    .catch((err: Error) => console.log(err))
  }
  //   const requestOptions = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   };

  //   const response = await fetch(
  //     "http://localhost:3000/api/getPosts",
  //     requestOptions
  //   );
  //   const data = await response.json();
  
  //   setPosts(data.posts);
  // };

  const deletePosts = async (e: React.ChangeEvent<HTMLFormElement>,  post: { id: number; }, ) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`http://localhost:3000/api/deletePost${post.id}`, requestOptions)
    const data = await response.json()
    console.log('delete' , e, data)
  }

  // useEffect(() => {
  //   fetchAllPosts() 

  // }, []);


  // return (
  //   <>
  //   <h4>Posts</h4>
  //     </>
  //   ) 

};


      // {/* {/* <h3 className='post-header'> List of the Posts</h3> */}
      // { 
      //   posts.map((post => (
      //     <div className='post-container' key={post.id}>
      //         <h3 className='title'>{post.title}</h3> 
      //         <p className='post-content'>{post.content}</p>
      //       {/* <button onClick={() => deletePosts(post.id)} className='post-btn'>Delete Post</button> */}
      //     {/* </div> */}
      //   // )))
      // // }   */}

export default DisplayAllPosts 