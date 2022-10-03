import {useSelector} from 'react-redux';

import '../../features/infoCard/infoCard.css';

function InfoCard () {

    const infoCardState = useSelector(state => state.InfoCard)
    console.log(infoCardState)

    return (
        <div className="card">
            <header className='card-title'>
                <h3 className='title'>Nombre del Personaje</h3>
            </header>
            <section className='card-body'>
                <img className='img-card' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'></img>
            </section>
            <footer className='card-footer'>
                <a className='info' href=''>Info...</a>
            </footer>
        </div>
    )
}

export default InfoCard;