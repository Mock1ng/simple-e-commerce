import React from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions/Actions';
import '../styles/item.scss'

function ItemCard({ nama, harga, id }) {
    const dispatch = useDispatch();
    return (
        <div className='item'>
            <h3>{nama}</h3>
            <h5>{harga}</h5>
            <button onClick={() => dispatch(addCart(nama, harga, id))}>Add to Cart</button>
        </div>
    )
}

export default ItemCard;
