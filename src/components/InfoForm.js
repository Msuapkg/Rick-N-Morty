import {useDispatch} from 'react-redux';
import React, {useState} from 'react';

import {getData} from '../features/infoCardSlice'

import '../styles/form.css';

import axios from 'axios';  

function InfoForm () {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `https://rickandmortyapi.com/api/character/?name=${inputValue}`;
        try {
            const axiosRes = axios.get(url)
            .then(response => {
                const data = response.data["results"];
                dispatch(getData({data}))
            }) .catch (error => {
                console.log(error.response.status, error.response.data);
            });
            console.log(axiosRes);
            
        } catch (error) {
            console.log(error, 'Algo salió mal');
        }
    }

    return (
        <div>            
            <div className='container-input-app'>
                <form onSubmit={e => handleSubmit(e)}>
                <input  
                    className='input-app' 
                    type='text' name='Search' placeholder='Escribe el nombre de un personaje de Rick & Morty'
                    value={inputValue} onChange={ e => handleChange(e) }
                    />
                <button className='button-app'>Search</button>
                </form>
            </div>
        </div>
    )
};

export default InfoForm;