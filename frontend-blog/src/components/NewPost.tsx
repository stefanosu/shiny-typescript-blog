import React from "react";

interface NewPostProps  {
  handleChange: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  savePost: (e:React.ChangeEvent<HTMLFormElement>) => void 
}

const NewPost = ({savePost, handleChange}: NewPostProps) => 
    (
      <form onSubmit={savePost}>
        <h1>Create New Post</h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder="title"
          size={39}
          required
          name='title'
        ></input>
        
        <textarea
          onChange={handleChange}
          placeholder="contents"
          rows={8}
          cols={41}
          required
          name='content'
        ></textarea>
  
        <button type='submit'>Save Post</button>
      </form>
  );
  
export default NewPost;