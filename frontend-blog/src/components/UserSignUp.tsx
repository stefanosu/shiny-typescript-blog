import React from 'react';
import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  email: string;
  password: string;
}

const UserSignUp = () => {

    const { register, setValue, handleSubmit, errors } = useForm<FormData>();
    const onSubmit = handleSubmit(({ username, password, email }) => {
      console.log(username, password, email);
    }); // username and password will have correct type

    return (
      <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input name="username" ref={register} />
      <label>Last Name</label>
      <input name="password" ref={register} />
      <input name="email" ref={register} />

      <button
        type="button"
        onClick={() => {
          setValue("username", "luo"); // ✅
          setValue("password", true); // ❌: true is not string
          setValue("email", true); // ❌: true is not string

        }}
        >
        SetValue
      </button>
    </form>
  );
  }

  export default UserSignUp 
