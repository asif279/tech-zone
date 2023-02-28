import { getCart } from "../utilities/fakedb";


export const productandCartloader = async() => {
    const productData= await fetch('http://localhost:5000/data');
    const products=await productData.json();
   
    const saveCart= getCart();
    const previousCart=[];
   // console.log(saveCart);
  for (const key in saveCart) {
   // console.log(key);
   const addProduct= products.find(product=>product.key ===key);
   if(addProduct){
    const quantity=saveCart[key];
    addProduct.quantity=quantity;
    previousCart.push(addProduct);
   }
  }
    return {products:products,previousCart:previousCart };
};

