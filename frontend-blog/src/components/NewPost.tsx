import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { updatePost, deletePost } from '../API';

// export interface NewPostProps {
//   handleChange: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => void;
//   savePost: (e: React.ChangeEvent<HTMLFormElement>) => void;
// }

type Props = PostProps & {
  updatePost: (post: PostObj) => void 
  deletePost: (id: string) => void
}

const NewPost: React.FC<Props> = ({ post, updatePost, deletePost }) => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, errors } = useForm<>(
    {}
  );

  // const [newPost, setNewPost] = useState<>();


  const handleChange = () => {
    console.log('post info')
  }

  const onSubmit = handleSubmit((postData: any) => { 
    createNewPost(postData);
  });

  // const createNewPost = async (postData: any) => {
  //   console.log(postData);
  //   const userId = localStorage.getItem("user") || "";
  //   const { userInfo } = localStorage.user  
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     Authorization: `Bearer${userInfo}`,
  //     body: JSON.stringify({ ...postData, userId }),
  //   };
  //   const response = await fetch(
  //     "http://localhost:3000/api/createPosts",
  //     requestOptions
  //     );

  //   const data = await response.json();
  //   setNewPost(data)
    //after post request I would like to redirect to user to go to see all their posts
    // if(submitted) {
    //   return <Redirect push to={{
    //     pathname: '/allPosts'
    //   }}
    // }

  return (
    <div className="form-container">
      <div className='inner'>  
      <form className="post-form" onSubmit={onSubmit}>
        <h1 className='title'>Create New Post</h1>
        <input className='input'
          ref={register({ required: true })}
          type="text"
          onChange={handleChange}
          placeholder="title"
          size={39}
          required
          name="title"
        ></input>

        <textarea className='content-form'
          ref={register({ required: true })}
          onChange={handleChange}
          placeholder="contents"
          rows={8}
          cols={41}
          required
          name="content"
        ></textarea>

        <button className='btn-post' type="submit">Create Post</button>
      </form>
    </div>
    </div>
  );
};

export default NewPost;
