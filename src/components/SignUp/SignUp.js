import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
        <h2 className='form-title'>SignUp</h2>
        <form action="">
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
<input className='btn-submit' type="submit" value="Login" />

        </form>
        <p>Already Have Account? <Link to="/login">Login</Link></p>
            
        </div>
    );
};

export default SignUp;