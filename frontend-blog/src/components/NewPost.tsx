import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

export interface NewPostProps {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  savePost: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const NewPost = ({ savePost, handleChange }: NewPostProps) => {
  const { register, handleSubmit, setValue, errors } = useForm<NewPostProps>({});

  const [newPost, setNewPost] = useState<NewPostProps>();

  const onSubmit = handleSubmit((postData: any) => {
    createNewPost(postData);
  });

  const createNewPost = async (postData: any) => {
    console.log(postData)
    const userId = localStorage.getItem('user') || '';
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...postData, userId})
    };
    const response = await fetch(
      "http://localhost:3000/api/createPosts",
      requestOptions
    );
    const data = await response.json();
    setNewPost(data); 
    //after request I would like to redirect to another route to go to see all posts 
    <Redirect to="/allPosts" />

  };
  


  return (
  <form onSubmit={onSubmit}>
    <h1>Create New Post</h1>
    <input
      ref={register({ required: true })}
      type="text"
      onChange={handleChange}
      placeholder="title"
      size={39}
      required
      name="title"
    ></input>

    <textarea
      ref={register({ required: true })}
      onChange={handleChange}
      placeholder="contents"
      rows={8}
      cols={41}
      required
      name="content"
    ></textarea>

    <button type="submit">Create Post</button>
  </form>);
};

NewPost.defaultProps = {
  handleChange: () => {},
  savePost: () => {},
};

export default NewPost;
