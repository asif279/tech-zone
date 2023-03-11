import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
   
    const {name,price,seller,img,star}=props.product;
    const {handleCart,product}=props;
    
   
    
    return (
        
         <div className="product">
         <img src={img} alt="" />
  
         
         <div className="product-info">
         <Link to="/itemdetails"  className='product-name'>{name}
         
       
         </Link>
          <p>Price: {price}$</p>
         
         </div>

         <button onClick={()=>handleCart(product)} className='btn-cart'>
            <p className='text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
         </button>
         
        
         </div>
        
    );
};

export default Product;