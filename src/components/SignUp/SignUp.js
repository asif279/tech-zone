import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const [erorr,setError]=useState(null);

  const handleSubmit =(event)=>{
    event.preventDefault();
    const form= event.target;
    const email =form.email.value;
    const password=form.password.value;
    const confirm= form.confirm.value;
    console.log(email,password,confirm);
    if(password.length<6){
        setError("Password must be 6 character long");
        return;
    }

    if(password!==confirm){
        setError("Your Password Didn't match ");
        return;
    }

  }


    return (
        <div className='form-container'>
        <h2 className='form-title'>SignUp</h2>
        <form action=""onSubmit={handleSubmit}>
<div className="form-control">
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="" required placeholder='Enter Your Email' />
</div>

<div className="form-control">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="" required placeholder='Enter Your Password' />
</div>

<div className="form-control">
    <label htmlFor="confirm"> Confirm Password</label>
    <input type="password" name="confirm" id="" required placeholder='Re-Enter Your Password' />
</div>
<input className='btn-submit' type="submit" value="Sign Up" />

        </form>
        <p>Already Have Account? <Link to="/login">Login</Link></p>
        <p className='text-error'>{erorr}</p>
            
        </div>
    );
};

export default SignUp;