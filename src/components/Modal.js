import { useDispatch,useSelector } from 'react-redux';
import { closeModal } from '../features/modalSlice';
import '../styles/modal.css'

function Modal () {

    const modalData = useSelector(state => state.dataModal);
    const dispatch = useDispatch();
    return (
        <div className='modal'>
            <div class="modal-content">
                <span class="close" onClick={() => dispatch(closeModal())}>&times;</span>
                <h1>{modalData.name}</h1>
                <div>
                    <img src={modalData.image}></img>
                </div>
                <div className='data-modal'>
                    <p>Specie: {modalData.species}</p>
                    <p>Status: {modalData.status}</p>
                    <p>Gender: {modalData.gender}</p>
                    <p>Location: {modalData.location.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;