import React from "react";

const NewPost = (props) => {
  return (
    <>
      <form>
        <h1>Create New Post</h1>
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="title"
          size="39"
          required
        ></input>
        <br />
        <textarea
          onChange={props.savePostContentToState}
          placeholder="contents"
          rows="8"
          cols="41"
          required
        ></textarea>
        <br />
        <button>Save Post</button>
      </form>
    </>
  );
};
export default NewPost;
