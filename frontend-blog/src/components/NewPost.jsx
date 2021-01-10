import React from "react";

const NewPost = () => {
  return (
    <>
      <form>
        <h1>Create New Post</h1>
        <input type="text" placeHolder="title" size="39" required></input>
        <br />
        <br />
        <textarea placeHolder="contents" rows="8" cols="41" required></textarea>
        <br />
        <br />
        <button>Save Post</button>
      </form>
    </>
  );
};
export default NewPost;
