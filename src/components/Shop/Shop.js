import React,{useState,useEffect} from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]= useState([])
    const [cart,setCart]=useState([]);

    useEffect(()=>{
  fetch('products.json')//fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setProducts(data))

    } ,[])

    const handleCart=(product)=>{
        console.log(product)
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
           {
            products.map(product=><Product key={product.key}
            handleCart={handleCart}
            product={product}
            
            
            ></Product>)
           }


            </div>
            <div className="cart-container">
               <h4>Order Summary</h4>
               <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;