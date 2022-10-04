import {useSelector} from 'react-redux';
import InfoCard from './components/InfoCard';
import InfoForm from './components/InfoForm'

import './App.css';

function App() {

  return (
    <div className="App">
      <div className='title-app'>
          <h1>Busca tu personaje favorito de Rick & Morty</h1>
          <img className='gif' src='https://res.cloudinary.com/jerrick/image/upload/v1574029200/5dd1c7902e40ff00232f384a.gif'></img>
      </div>
      <InfoForm />
      <InfoCard/>
    </div>
  );
}

export default App;
