import React, { useContext } from 'react';
import './Header.css';
import TechZone from '../../images/techZone.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {

    const {user,logOut}=useContext(AuthContext)
    return (
        <nav className='header'>
        <Link to="/shop">  <img className='logo' src={TechZone} alt="" /></Link>
           
            <div className='navhead'>
            <Link to='/shop'>Shop</Link>
            <Link to="/order">Order</Link>
           
            <Link to="/inventory">Inventory</Link>

            {
    user?.uid ?
    <button className='logout' onClick={logOut
    }>{user.displayName
}</button>
    :
    <>
                <Link to="/login">Login</Link>
                <Link to="/signup" >SignUp</Link>

                </>
            }
           
          
           
            </div>
        </nav>
    );
};

export default Header;