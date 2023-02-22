import React from 'react';
import './Header.css';
import TechZone from '../../images/techZone.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img className='logo' src={TechZone} alt="" />
            <div className='navhead'>
            <Link to="/order">Order</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/inventory">Manage Inventory</Link>
            <Link to="/login">Login</Link>
           
            </div>
        </nav>
    );
};

export default Header;