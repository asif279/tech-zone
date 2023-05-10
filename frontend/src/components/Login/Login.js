import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const {SignIn,signInGoogle}=useContext(AuthContext);
    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/shop';



    const handleSubmit =(event)=>{
        event.preventDefault();
        const form= event.target;
        const email =form.email.value;
        const password=form.password.value;
        
        console.log(email,password);


        SignIn(email,password)
        .then(res=>{
            const user=res.user;
            console.log(user);
            form.reset();
            navigate(from,{replace:true})
        
        })
        .catch(error=>console.error(error));


    };

    const handleGoogle =()=>{
        signInGoogle()
        .then(res=>{
          const user=res.user;
          console.log(user);
          navigate(from,{replace:true})
        })
        .catch((error) => {
        
          const errorMessage = error.message;
          //setLoginerror(errorMessage);
          console.log(errorMessage);
          
        });
      }

    
    return (
        <div className='form-container'>
        <h2 className='form-title'>Login</h2>
        <form action="" onSubmit={handleSubmit
        }>
<div className="form-control">
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="" required placeholder='Enter Your Email' />
</div>

<div className="form-control">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="" required placeholder='Enter Your Password' />
</div>
<input className='btn-submit' type="submit" value="Login" />

        </form>
        <p>New to TechZone ?<Link className='newuser' to="/signup">Create New Account</Link></p>

        <button  onClick={handleGoogle} className='btn-submit btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            
        </div>
    );
};

export default Login;