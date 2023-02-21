import React from 'react';
import './Header.css';
import TechZone from '../../images/techZone.png'

const Header = () => {
    return (
        <nav className='header'>
            <img className='logo' src={TechZone} alt="" />
            <div className='navhead'>
            <a href="/order">Order</a>
            <a href="/review">Order Review</a>
            <a href="/inventory">Manage Inventory</a>
            <a href="/login">Login</a>
           
            </div>
        </nav>
    );
};

export default Header;