import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';
import '../styles/global.scss'

function Home() {

    const items = useSelector(state => state.items);
    const cart = useSelector(state => state.cart);

    return (
        <div className='container'>
            <h1 className='jumbotron'>This is Home</h1>

            <div className="cart">
                    <h4>items in cart: {cart.length}</h4>
                    <NavLink to='/cart'>Go to Cart</NavLink>
            </div>

            <div className="menu">

            <div className="items-wrapper">
                {items.map((item) => (
                    <ItemCard nama={item.nama} harga={item.harga} id={cart.length} key={item.id} />
                ))}
                </div>

                

            </div>



        </div>
    )
}

export default Home
