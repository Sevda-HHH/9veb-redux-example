import React from 'react'
import { useDispatch } from 'react-redux';
import { productsAction } from '../../redux/actions'

import './style.css';

export function Search() {

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(productsAction(e.target.value))
    }

    return (
        <div className="search-box">
            <input type="text" onChange={handleChange} />
        </div>
    )
}
