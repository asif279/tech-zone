import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import './Payment.css';
import { useLocation, useNavigate } from "react-router-dom";







const Payment = (props) => {
  
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/shop';

    const random=Math.random()*100;
    const random1=Math.floor(random);


    const handleDelivery=()=>{
      
        window.alert("Your Order is Placed Succesfully & Your Order Number is "+random1);
        navigate(from,{replace:true});
    }
  
    

    return (
        <>


      

        <Button className="mt-5 bu " variant="primary" onClick={handleShow}>
      Payment
      </Button>

      <Modal className="gg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <h2 className="ss">Payment</h2>
        </Modal.Header>
        <Modal.Body>

        <div className="payment-option mt-3 py-3 bg-warning">
            <h2 className="text-center mt-5 ">Payment Method </h2>

            <div class="form-check">
  <input onClick={handleDelivery} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
   Bkash
  </label>
</div>
<div class="form-check">
  <input onClick={handleDelivery} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label class="form-check-label" for="flexRadioDefault2">
   Cash On Delivery
  </label>
  
</div>


        </div>
          

       
        </Modal.Body>
        <Modal.Footer>
          <Button className="bn" variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
     
    </>
    );
};

export default Payment;