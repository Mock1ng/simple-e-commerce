import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss';

function Navbar() {
    return (
        <nav>
            <ul className='menu'>
                <NavLink to='/' activeClassName='active'>
                    Home
                </NavLink>
                <NavLink to='/admin' activeClassName='active'>
                    Admin
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
