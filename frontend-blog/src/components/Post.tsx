import React from "react";
// import PostType from './Types';


export interface SinglePost {
  // post:PostType, 
  editPost: (id: number) => void;
  deletePost: (id: number) => void;
  title: string;
  content: string;
  id: number;
}


const Post = ({ title, content, id, editPost, deletePost }: SinglePost) => (
  <section>
    <h3>{title}</h3>
    <p> {content}</p>
    <button onClick={() => editPost(id)}>Edit</button>
    <button onClick={() => deletePost(id)}>Delete</button>
  </section>
);

export default Post;
