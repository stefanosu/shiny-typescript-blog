import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export interface Profile {
  username: string;
  email: string;
  password: string;
}

const UserRegister: React.FC = () => {
  const { register, handleSubmit, setValue, errors } = useForm<Profile>({});
  const [newUser, setNewUser] = useState<Profile>();

  const onSubmit = handleSubmit((userData: any) => {
    createNewUser(userData);
  });

  const createNewUser = async (userData: any) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };
    const response = await fetch(
      "http://localhost:3000/api/signUp",
      requestOptions
    );
    const data = await response.json();
    setNewUser(data);
  };



  return (
    <>
      <div className='reg-container'>
        <main className='sub-container'><span className='header'>Sign Up!</span>
          <form className='form' onSubmit={onSubmit}> 
            <div className='username'>
              <label htmlFor="username">User Name</label>
              <input
                ref={register({ required: true })}
                id="username"
                name="username"
                type="text"
              />
              {errors.username && <div className="error">Enter your name</div>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password </label>
              <input
                ref={register({ required: true })}
                id="password"
                name="password"
                type="text"
              />
              {errors.password && (
                <div className="error">Enter your last name</div>
              )}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input
                ref={register({ required: true })}
                id="email"
                name="email"
                type="text"
              />
              {errors.email && <div className="error">Enter your email</div>}
            </div>
            <button className='btn' type="submit">Register User</button>
          </form>
        </main>
      </div>
    </>
  );
};
export default UserRegister;
