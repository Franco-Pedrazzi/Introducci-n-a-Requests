import './App.css';
import User from './User.js';
import { useState } from 'react'

function App() {
  const [codigo, setCodigo] = useState("")
  const [pais, setPais] = useState("")
  const handleCodigo = (event) => {
    setCodigo(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://restcountries.com/v3.1/name/' + codigo)
      .then(response => response.json())
      .then(data => { setPais(data[0]) })
  }


  return (
    <div className="App">

      <header className="App-header">
        <h1>Random Country</h1>
        <form onSubmit={handleSubmit}>

          <input type="text" value={codigo} onChange={handleCodigo}></input>
          <button type='submit'>boton</button>
        </form>
        <br></br>

        {pais && <h1>{pais["name"]["common"]}</h1>}
        {pais && <img src={pais["flags"]["png"]}></img>}
        {pais && <h2>Capital: {pais["capital"][0]}</h2>}
        <h1>Random User</h1>
        
        {<User /> }
       


      </header>
    </div>
  );
}

export default App;
