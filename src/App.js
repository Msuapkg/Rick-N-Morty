import React from 'react';
import {useSelector} from 'react-redux';
import { Counter } from './features/counter/Counter';
import InfoCard from './components/InfoCard/InfoCard';

import './App.css';

function App() {

  const infoCardState = useSelector(state => state.infoCard);
  console.log(infoCardState);

  const handleInput = function () {
    
  }

  return (
    <div className="App">
      <div className='title-app'>
        <h1>Busca tu personaje favorito de Rick & Morty</h1>
      </div>
      <div className='container-input-app'>
        <input className='input-app'  />
        <button className='button-app'>Search</button>
      </div>
      <div className='body-app'>
        <InfoCard />
      </div>
    </div>
  );
}

export default App;
