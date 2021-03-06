import React, {useState, useEffect} from 'react'
import UserRegister from './UserRegister';
import NewPost from './NewPost';
import UserLogin from './UserLogin';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import LogOut from './LogOut';
import AllPosts from './AllPosts'

export const HomePage: React.FC = () => {
  const [isLoggedIn, setLoginStatus] = useState(false);

  const updateLoginStatus = (status: boolean) => {
    setLoginStatus(status)
  }

  useEffect(() => {
    getCurrentUser()
  }, []);

  const getCurrentUser = () => {
    const response = localStorage.getItem('user')
    if (response !== null)
      setLoginStatus(true);
  }

  
  return (
    <>
        { isLoggedIn ? 
        // new posts 
        <AllPosts /> 
        :<>
        <UserRegister  />
        <UserLogin onLogin={updateLoginStatus} onLogout={updateLoginStatus} />
        <LogOut onLogout={updateLoginStatus}/>
        </>
        }
  </>
  )
}