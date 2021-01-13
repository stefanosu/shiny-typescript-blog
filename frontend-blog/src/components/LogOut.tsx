import * as React from 'react';

export interface UserLoginProps {
  onLogout: (status: boolean) => void;
}



const LogOut: React.FC<UserLoginProps> = (props:UserLoginProps): JSX.Element => {
  const {onLogout} = props 
  return (
    <div>
      {/* <button onClick={onLogout}></button> */}
    </div>
  )
}


export default LogOut 