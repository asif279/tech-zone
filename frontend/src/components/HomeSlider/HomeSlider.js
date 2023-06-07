import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import a1 from '../../images/a1.jpg';
//import a2 from '../../images/a2.png';

import './HomeSlider.css';



const HomeSlider = () => {
    return (
        <>
  


  <Carousel variant="dark" >

 
      <Carousel.Item className='bb'>
    

      <a href="/shop">
    <Button className='shop-btn'  variant="dark">Shop Now</Button>
    </a>
        
    
        <img
          className=" img-fluid "
          src={a1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Exciting Shopping Product</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      

    <a href="/shop">
    <Button className='shop-btn'  variant="dark">Shop Now</Button>
    </a>
        
   
        <img
          className="d-block ii"
       //   src={}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Get Your Gadedgt From Here</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>

            
        </>
    );
};

export default HomeSlider;
