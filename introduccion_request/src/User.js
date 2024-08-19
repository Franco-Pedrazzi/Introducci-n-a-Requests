import { useState } from 'react';
import './App.css';
function User() {
  const [id,setId]=useState(Math.ceil(Math.random() * 1000)) 
  const ChangeUser = () => {
    setId(Math.ceil(Math.random() * 1000));
    
  }
  return (
    <div className="App">
      <button onClick={ChangeUser}>randomUser</button>
        <img src={`https://robohash.org/${id}`}/>
    </div>
  );
}

export default User;
