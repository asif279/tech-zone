import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ItemReview from '../ItemReview/ItemReview';
import './Order.css';

const Order = () => {
  const {previousCart}= useLoaderData();
  const [cart,setCart] =useState(previousCart);
 // console.log(cart);
 const handleRemove=(key)=>{
  //console.log(key);
  const remains= cart.filter(product=>product.key!==key);
  setCart(remains);
  removeFromDb(key);
}
const clearCart =()=>{
  setCart([]);
  deleteShoppingCart();
}
    return (
      <div className='shop-container'>
      <div className="order-container">

      {
        cart.map(product=><ItemReview
        
        key={product.key}
        product={product}
        handleRemove={handleRemove}
        ></ItemReview>)
      }
      {
        cart.length === 0 && <h3>No Item for Review .Plase <Link className='noitem' to="/shop">Shop </Link>more</h3>
      }
    


      </div>
      <div className="cart-container">
       <Cart clearCart={clearCart} cart={cart}>

<Link to="/shipping">
  <button className='shipment-btn'>Proceed CheckOut</button>
</Link>
        </Cart>
      </div>
  </div>
    );
};

export default Order;