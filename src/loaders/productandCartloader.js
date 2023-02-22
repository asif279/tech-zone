import { getCart } from "../utilities/fakedb";


export const productandCartloader = async() => {
    const productData= await fetch('products.json');
    const products= productData.json();
   
    const saveCart= getCart();
    console.log(saveCart);

    return products;
};

