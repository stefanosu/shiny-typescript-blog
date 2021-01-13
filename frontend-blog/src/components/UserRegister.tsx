import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import {BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export interface Profile {
  username: string;
  email: string;
  password: string;
};

const UserRegister: React.FC = () => {
  const { register, handleSubmit, setValue, errors } = useForm<Profile>({});
  const [newUser, setNewUser] = useState<Profile>();

  const onSubmit = handleSubmit((userData: any) => {
    createNewUser(userData)
  })

  
  
  const createNewUser = async (userData: any) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( userData )
    };
    const response = await fetch("http://localhost:3000/api/signUp", requestOptions);
    const data = await response.json()
    setNewUser(data);
  }


  
  //   <Router> 
  //   <Link to="/">Home</Link>
  // <Router/>
  
  return (
    <>
    
    <main>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">User Name</label>
          <input
            ref={register({ required: true })}
            id="username"
            name="username"
            type="text"
          />
          {errors.username && <div className="error">Enter your name</div>}
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            ref={register({ required: true })}
            id="password"
            name="password"
            type="text"
          />
          {errors.password && <div className="error">Enter your last name</div>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            ref={register({ required: true })}
            id="email"
            name="email"
            type="text"
          />
          {errors.email && <div className="error">Enter your email</div>}
        </div>
        <button type="submit">Save User</button>
      </form>
    </main>
    </>
  )
}
export default UserRegister; 
