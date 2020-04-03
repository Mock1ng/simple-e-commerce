import React from 'react';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCart';
import '../styles/global.scss'
import '../styles/cart.scss'

function Cart() {
    const cart = useSelector(state => state.cart);
    let totalHarga = 0;
    cart.map(item => totalHarga += item.harga)
    return (
        <div className="container">
            <div className='cart-wrapper'>
                {cart.map((item) => (
                    <ItemCard nama={item.nama} harga={item.harga} key={item.id} />
                ))}
                <br/>
                <h3>Total Harga: Rp.{totalHarga}</h3>
            </div>
        </div>
    )
}

export default Cart
