import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Product.css'

const Product = (props) => {
    const [data,setData]=useState(false);
    const handleClick = () => {
        setData(!data)
    }
   
    const {name,price,img}=props.product;
    const {handleCart,product}=props;
    
   
    
    return (
        
         <div className="product">
         <img src={img} alt="" />
  
         
         <div className="product-info">
        
            
        

                <Link to="/itemdetails" onClick={handleClick}  className='product-name'>{name}
         </Link>

       


       
          <p>Price: <span>{price}$</span></p>
         
         </div>

         <button onClick={()=>handleCart(product)} className='btn-cart
         '>
           <div className=' d-flex align-items-center justify-content-center h-100'>
           <p className='text  '>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </div>
         </button>
         
        
         </div>
        
    );
};

export default Product;