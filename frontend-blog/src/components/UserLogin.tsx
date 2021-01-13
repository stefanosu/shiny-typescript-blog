import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export interface UserInformation {
  username: string;
  password: string;
}

export interface UserLoginProps {
  onLogin: (status: boolean) => void;
  onLogout: (status: boolean) => void;
}


const UserLogin: React.FC<UserLoginProps> = (props: UserLoginProps) => {
  const { onLogin, onLogout } = props;
  const { register, handleSubmit, setValue, errors } = useForm<UserInformation>(
    {}
  );

  const onSubmit = handleSubmit((userData: any) => {
    loginUser(userData);
  });

  const loginUser = async (userData: any) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };
    const response = await fetch(
      "http://localhost:3000/api/login",
      requestOptions
    );
    const data = await response.json();
    if (data.accessToken) {
      localStorage.setItem("user", JSON.stringify(data));
      onLogin(true);
      console.log(localStorage);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    onLogout(false);
  };

  useEffect(() => {}, []);

  return (
    <>
    
    <div className='log-container'> 
      <main className='main'>
        <form className='login-form' onSubmit={onSubmit}><span className='header'>Welcome Log Back In!</span>
          <div className='userlogin'>
            <label htmlFor="username">User Name</label>
            <input
              data-testid="username"
              ref={register({ required: true })}
              id="username"
              name="username"
              type="text"
              />
            {errors.username && (
              <div className="error">Enter your username</div>
            )}
          </div>
          <div className='loginpw'>
            <label htmlFor="password">Password </label>
            <input
              data-testid="password"
              ref={register({ required: true })}
              id="password"
              name="password"
              type="text"
              />
            {errors.password && (
              <div className="error">Enter your password</div>
              )}
          </div>
          <button className='btn' type="submit">Login</button>
        </form>
      </main>
    </div>
    </>
  );
};

export default UserLogin;
