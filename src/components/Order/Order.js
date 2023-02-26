import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ItemReview from '../ItemReview/ItemReview';

const Order = () => {
  const {products,previousCart}= useLoaderData();
  const [cart,setCart] =useState(previousCart);
  console.log(cart);
    return (
      <div className='shop-container'>
      <div className="order-container">

      {
        cart.map(product=><ItemReview
        
        key={product.key}
        product={product}
        ></ItemReview>)
      }
    


      </div>
      <div className="cart-container">
       <Cart cart={cart}/>
      </div>
  </div>
    );
};

export default Order;