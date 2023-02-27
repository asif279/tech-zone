import React from 'react';
import './Cart.css'

const Cart = ({cart,clearCart,children}) => {
    let total=0;
    let shipping=0;
    let tax=0;
    let grandtotal=0;
    let quantity=0;
   
    
    
    for(const product of cart){
        quantity=quantity +product.quantity;
        //console.log(quantity)
        total=parseFloat((total+product.price *product.quantity).toFixed(2));
       

        if(total>50){
            shipping=0
        }
        else if(total<50){
            shipping=shipping +product.shipping
        }
       tax=parseFloat(((total+shipping)*0.1).toFixed(2));
       grandtotal=parseFloat((total+shipping+tax).toFixed(2));
       }
    
    return (
        <div className='cart-info'>
            <h4>Order Summary</h4>
               <p>Selected Items:{quantity}</p> 
               <p>Price:{total}$</p>
               <p>Total Shipping:{shipping}$</p>
               <p>Tax:{tax}$</p>
            
               <h4>Grand Total:{grandtotal}</h4>
               <button className='clear-btn' onClick={clearCart}>Clear Cart</button><br/>
               {children}
        </div>
    );
};

export default Cart;