import React, { useContext, useState } from 'react';
import './Shipping.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/UserContext';

const Shipping = () => {
    const [validated, setValidated] = useState(false);
    const {user} =useContext(AuthContext);

    const handleSubmit = (event) => {
      const form = event.target;
      const fullname=form.fullname.value;
      const zip=form.zip.value;
      const city=form.city.value;
      const state=form.city.value;
      const number=form.number.value;
      console.log(fullname);
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return (
        <>


<div className="kk">
<h2 className='text-center'>Please Fill Your Information</h2>
<Form className='w-75 mx-auto' noValidate validated={validated} onSubmit={handleSubmit
        } >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            type="text"
            htmlFor="fullname"
            name="fullname"
            placeholder="First name"
            defaultValue={user.displayName}
          />
         
        </Form.Group>
       
         
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              htmlFor="username"
              name="username"
              placeholder="Username"
              defaultValue={user.displayName}
              aria-describedby="inputGroupPrepend"
              required
            />
           
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3 w-75">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" name="city" htmlFor="city" defaultValue="Dhaka" required />
         
        </Form.Group>


        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Phone No</Form.Label>
          <Form.Control type="number" htmlFor="number" name="number" placeholder="Enter Your Number" required />
        
        </Form.Group>
        <br/>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" htmlFor="state" name="state" placeholder="State" required />
         
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" htmlFor="zip" name="zip" placeholder="Zip" required />
        
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>

     <Link to="/payment" >

     <Button   className='mx-auto mt-5 check' type="submit">CheckOut</Button>
     </Link>
    </Form>
</div>
           
        </>
    );
};

export default Shipping;