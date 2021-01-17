import React, { useState, useEffect, useCallback } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import UpdatePost from "./UpdatePost"
import { useForm } from "react-hook-form";

interface PostData {
  title: string;
  content: string;
  id: number;
  favorite: boolean;
}

// interface Posts {
//   list: PostData[]; 
// }


const DisplayAllPosts: React.FC = () => {

  // const [allPosts, setAllPosts] = useState();

  // const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  // const [isUpdatePost, setIsUpdatePost] = useState(false);
  // const [editPostId, setEditPostId] = useState(0);


  const [posts, setPosts] = useState({})

  const { register, handleSubmit, setValue, errors } = useForm<PostData>({});


    const fetchAllPosts = async () => {
    // useEffect(() => {
      // let isActive = true;
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
    
      const response = await fetch("http://localhost:3000/api/getPosts", requestOptions);
      const data = await response.json()
          // if (isActive) {
          //   setList(data.response);
          // }
            setPosts(data)
            console.log(posts)
          
    }
          // for(let post in posts) {
          //   let postObj = posts
          //   console.log(postObj)
          // }
    

    useEffect(() => {
      fetchAllPosts()
    }, [])

  

    return ( 
      <>
        <h3> List of the Posts</h3> 
          <ul>
          {/* {posts.map((post) => {
            return console.log(post)
          }) */}
          {/* }  */}
        </ul>
      </>
    )



    // const getAllPosts = async (postsData: any) => {
    //   const requestOptions = {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify( postsData )
    //   };
    //   const response = await fetch("http://localhost:3000/api/getPosts", requestOptions);
    //   const data = await response.json()
    //   console.log(data)
    //   }

  

      


  // const toggleCreateNewPost = () => {
  //   setIsCreateNewPost(!isCreateNewPost);
  // };
  // const toggleUpdatePostComponent = () => {
  //   if(isUpdatePost) {
  //     setIsUpdatePost(!isUpdatePost)
  //     setState({title: '', content:""})
  //   } else {
  //     setIsUpdatePost(!isUpdatePost)
  //     const post = allPosts.find(post => {
  //       return post.id === editPostId;
  //     }); 
  //     if(post) {
  //       setState(post)
  //     }
  //   }
  // }
  // const editPost = (id:number) => {
  //   setEditPostId(id);
  //   console.log(id)
  //   toggleUpdatePostComponent();
  // };


  // const deletePost = (id:number) => {
  //   // setDeletePost(id);
  //   setAllPosts(allPosts.filter( post => post.id !== id ));

  // };



  // const updatePost = (e:React.ChangeEvent) => {
  //   e.preventDefault();
  //   const updatedPost = allPosts.map(eachPost => {
  //     if (eachPost.id === editPostId) {
  //       console.log([eachPost.id, editPostId] )
  //       return {
  //         ...eachPost,
  //         title: state.title || eachPost.title,
  //         content: state.content || eachPost.content
  //       };
  //     }
  //     console.log(eachPost)
  //     return eachPost;
  //   });
  //   setAllPosts(updatedPost);
  //   toggleUpdatePostComponent();
  // };

  // const savePost = (e: React.ChangeEvent)=> {
  //   e.preventDefault();
  //   debugger
  //   const id = Date.now();
  //   setAllPosts([...allPosts, { title: state.title, content: state.content, id}]);
  //   console.log(allPosts);
  //   setState({title: '', content: ''});
  //   toggleCreateNewPost();
  // };

  // if (isCreateNewPost) {
  //   return (
  //     <>
  //       <NewPost
  //         handleChange={handleChange}
  //         savePost={savePost}
  //       />
  //     </>
  //   );
  // }
  // else if (isUpdatePost) {
    
  //   return (
  //     <UpdatePost
  //       title={state.title}
  //       content={state.content}
  //       updatePost={updatePost}
  //       handleChange={handleChange}
  //     />
  //   );
  // }
  // return (
  //   <>
  //     <h2>All Posts</h2>
  //     {!allPosts.length ? (
  //       <div>
  //         <h3>There is nothing to see here!</h3>
  //       </div>
  //     ) : (
  //       allPosts.map(eachPost => {
  //         return (
  //           <Post
  //             id={eachPost.id}
  //             key={eachPost.id}
  //             title={eachPost.title}
  //             content={eachPost.content}
  //             deletePost={deletePost}
  //             editPost={editPost}
  //           />
  //         );
  //       })
  //     )}
  //     <br />
  //     <br />
  //     <button onClick={toggleCreateNewPost}>Create New</button>
  //   </>
  // );
  
  }
export default DisplayAllPosts;
