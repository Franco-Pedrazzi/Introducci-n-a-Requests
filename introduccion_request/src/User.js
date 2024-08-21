import { useState } from 'react';
import './App.css';

function User() {
  const [ids, setIds] = useState([]);
  const [pocicion, setPocicion] = useState(0);

  const AddUser = () => {
    const newValue = [Math.ceil(Math.random() * 1000), pocicion];
    setIds([...ids, newValue]);
    setPocicion(pocicion + 1);
  };

  const deleteUser = (pocicionParaEliminar) => {
    const updatedIds = ids.filter(id => id[1] !== pocicionParaEliminar);
    setIds(updatedIds);
  };

  return (
    <div className="App">
      <button onClick={AddUser}>randomUser</button>
      <ul>
        {ids.map((id) => (
          <li>
            <img src={`https://robohash.org/${id[0]}`}/>
            <button onClick={() => deleteUser(id[1])}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
