import React, {useState} from 'react';
//import {useSelector} from 'react-redux';
import InfoCard from './components/InfoCard';

import './App.css';
import axios from 'axios';

function App() {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://rickandmortyapi.com/api/character/?name=${inputValue}`;
    console.log(url)
    console.log(inputValue);

    try {
      const axiosRes = axios.get(url)
      .then(response => {
        console.log(response.data, response.status);
      }) .catch (error => {
        console.log(error.response.status, error.response.data);
      });
      console.log(axiosRes);
      
    } catch (error) {
      console.log(error, 'Algo salió mal');
    }

  }


  return (
    <div className="App">
      <div className='title-app'>
        <h1>Busca tu personaje favorito de Rick & Morty</h1>
      </div>
      
      <div className='container-input-app'>
        <form onSubmit={e => handleSubmit(e)}>
          <input  
            className='input-app' 
            type='text' name='Search' 
            value={inputValue} onChange={ e => handleChange(e) }
            />
          <button className='button-app'>Search</button>
        </form>
      </div>
      <div className='body-app'>
        {}
        <InfoCard />
      </div>
    </div>
  );
}

export default App;
