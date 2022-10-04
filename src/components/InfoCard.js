import {useSelector,useDispatch} from 'react-redux';
import {openModal} from '../features/modalSlice';
import {dataModal} from '../features/dataModalSlice';

import '../styles/infoCard.css';
import Modal from './Modal';

function InfoCard () {

    const dispatch = useDispatch();
    const data = useSelector(state => state.infoCard);
    const { isOpen } = useSelector(state => state.modal);
    

    if (data.length !== 0) {
        const arrayData = data.data;
        return (
            <div className='container-cards'>
                {arrayData.map(item =>  (
                    <div className="card" key={item.id}>
                        <header className='card-title'>
                            <h3 className='title'>{item.name}</h3>
                        </header>
                        <section className='card-body'>
                            <img className='img-card' src={item.image}></img>
                        </section>
                        <footer className='card-footer'>
                            <button className='info' onClick={() => {
                                dispatch(openModal())
                                dispatch(dataModal(item))
                            }}>Info...</button>
                        </footer>
                    </div>
                ))}
                { isOpen && <Modal />}

            </div>
            
        )
    } 
}

export default InfoCard;