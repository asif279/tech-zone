import React,{useState,useEffect} from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const products=useLoaderData();
    const [cart,setCart]=useState([]);

  //   useEffect(()=>{
  // fetch('products.json')//fetch('https://jsonplaceholder.typicode.com/users')
  // .then(res=>res.json())
  // .then(data=>setProducts(data))

  //   } ,[])

    useEffect(()=>{
      const storeCart=getCart();
      //console.log(storeCart);
      const saveCart=[];
      for (const key in storeCart) {
       //console.log(key);
       const addProduct=products.find(product=>product.key===key)
      if(addProduct){
        const quantity=storeCart[key];
        addProduct.quantity=quantity;
        saveCart.push(addProduct);
        //console.log(addProduct);
      }
      }
      setCart(saveCart);
    },[products])

    const handleCart=(product)=>{
      let newCart=[];
      const exist= cart.find(pd=>pd.key===product.key)
      if(!exist){
        product.quantity=1;
        newCart=[...cart,product]
      }
      else{
        const rest=cart.filter(pd=>pd.key !==product.key);
        exist.quantity=exist.quantity+1;
        newCart=[...rest,exist];
      }
        //console.log(product)
         //newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.key);
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
              <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;