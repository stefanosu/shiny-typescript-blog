import CreateNewPost from "./CreateNewPost";
import React, { useState, useRef } from "react";

const getTitle = useRef();
const getContent = useRef();

const AllPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const savePostContentToState = (event) => {
    setContent(event.target.value);
    console.log(content);
  };

  const savePost = () => {
    setAllPosts([...allPosts, { title, content }]);
    setTitle("");
    setContent("");
    console.log(allPosts);
    getTitle.current.value = ''
    getContent.current.value = ''
  };

  return (
    <>
      <CreateNewPost
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
        getTitle={getTitle}
        getContent={getContent}
        savePost={savePost}
      />
    </>
  );
};
export default AllPosts;
