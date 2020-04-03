import React, { useState, createContext } from 'react';

export const ItemContext = createContext();


export function ItemProvider(props) {

    const [inputNama, setInputNama] = useState('');
    const [inputHarga, setInputHarga] = useState('');
    const [cartItems, setCartItems] = useState([])

    return (
        <ItemContext.Provider value={{ nama: [inputNama, setInputNama], harga: [inputHarga, setInputHarga], cart: [cartItems, setCartItems] }}>
            {props.children}
        </ItemContext.Provider>
    )
}
