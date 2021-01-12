import React from 'react'
import UserRegister from './UserRegister';




export const HomePage: React.FC<{}> = () => {
  return (
    <div> 
      <UserRegister username={''} email={''} password={''}  />
  </div>
  )
}