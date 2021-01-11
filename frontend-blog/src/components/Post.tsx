import React from "react";

interface PostProps {
  title: string;
  content: string;
  id: number;
  editPost: (id: number) => void;
  deletePost: (id: number) => void;
}

const Post = ({ title, content, id, editPost, deletePost }: PostProps) => (
  <section>
    <h3>{title}</h3>
    <p> {content}</p>
    <button onClick={() => editPost(id)}>Edit</button>
    <button onClick={() => deletePost(id)}>Delete</button>
  </section>
);

export default Post;
