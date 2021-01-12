import React, { useState } from 'react';
import './App.css';
import { HomePage } from './components/HomePage';


  const App:React.FC = ()  => {
  const [value, setValue] = useState('')

  return (
    <HomePage /> 
    ) 
}


export default App;
    {/* <NewPost handleChange={(param) => setValue(param.target.value)}
    // savePost={(param) => setValue(param.target.value)}
    // /> */}
