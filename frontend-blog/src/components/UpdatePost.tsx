import React from "react";


interface UpdatePostProps  {
  handleChange: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  updatePost: (e:React.ChangeEvent<HTMLFormElement>) => void;
  title: string;
  content: string;
  favorite: boolean;
}

const UpdatePost = ({updatePost, handleChange, content, title}:UpdatePostProps) => 
    (
      <form onSubmit={updatePost}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="title"
          size={39}
          required
          name='title'
          value={title}
        ></input>
        
        <textarea
          onChange={handleChange}
          placeholder="contents"
          rows={8}
          cols={41}
          required
          name='content'
          value={content}
        ></textarea>
        <br />
        <button type='submit'>Update Post</button>
      </form>
  );

export default UpdatePost;
