import React from 'react'; 
import { useForm } from 'react-hook-form'
import { useFetch } from "./useFetch";


export type Profile = {
  username: string
  email: string
  password: string
}

const UserSignUp : React.FC<Profile> = () => {

  const {register, handleSubmit, errors} = useForm<Profile>()

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })

  const data = useFetch<Profile>({
    url: ""
  });

  return (
    <main>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">User Name</label>
        <input ref={register({ required: true })} id="username" name="username" type="text"/>
        {
          errors.username && <div className="error">Enter your name</div>
        }
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input ref={register({ required: true })} id="password" name="password" type="text"/>
        {
          errors.password && <div className="error">Enter your last name</div>
        }
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input ref={register({ required: true })} id="email" name="email" type="text"/>
        {
          errors.email && <div className="error">Enter your email</div>
        }
      </div>
      <button type="submit">Save</button>
    </form>
    </main>
  );
}


export default UserSignUp;