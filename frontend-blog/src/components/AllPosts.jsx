import CreateNewPost from "./CreateNewPost";
import React, { useState, useRef } from "react";

const getTitle = useRef();
const getContent = useRef();

const AllPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);

  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const savePostContentToState = (event) => {
    setContent(event.target.value);
    console.log(content);
  };

  const toggleCreateNewPost =() => {
    setIsCreateNewPost (!isCreateNewPost)
}

  const savePost = (e) => {
    e.preventDefault()
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, id }]);
    setTitle("");
    setContent("");
    console.log(allPosts);
    getTitle.current.value = ''
    getContent.current.value = ''
    toggleCreateNewPost()
  };

  if(isCreateNewPost){
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
    }
  return (
    <>
      <h2>All Posts</h2>
      <br/>
      <br/>
      <button onClick={toggleCreateNewPost}>Create New</button>
    </>
  )
};

export default AllPosts;
