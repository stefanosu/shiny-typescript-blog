import React, {useState, useEffect} from 'react'
import UserRegister from './UserRegister';
import NewPost from './NewPost';
import UserLogin from './UserLogin';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";


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
      {/* <Router >
      
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <Router /> */}


        { isLoggedIn ? 
        // new posts 
        <NewPost />
        :<>
        <UserRegister  />
        <UserLogin onLogin={updateLoginStatus} onLogout={updateLoginStatus} />
        </>
        }
  </>
  )
}