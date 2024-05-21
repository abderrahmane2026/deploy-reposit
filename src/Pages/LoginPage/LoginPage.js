import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import {  Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import LoadingSubmite from './Loading';
import "./LoginPage.css"
import Cookie from "cookie-universal"

export default function LoginPage() {
    //cookie
    const cookie = Cookie();

    //laoding 
    const[Loading,setLoading] = useState(false);
    //navigation
    const navigate = useNavigate();

    // error for submite

    // const [err,seterr]= useState();
    const [err, seterr]= useState(null);


  //fonction to suitsh login to singup

      const [isSignUpActive, setIsSignUpActive] = useState(false);

const handleSignUpClick = () => {
    setIsSignUpActive(true);
};

const handleSignInClick = () => {
    setIsSignUpActive(false);
};

//Login function


const [values, setvalues] = useState({
    email: '',
    password: ''
  });
  
  
  //error for true information

  const [error, seterror] = useState({});



const handleInput = (event) => {
    setvalues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  async function handleSubmit (event) {
   
    event.preventDefault();
    seterror();
    setLoading(true);
    
   
     try{
         await axios.post("http://localhost:8081/loginn", values);
         setLoading(false);
           //cookie
    //    const token = res.data.token;
    //    cookie.set("e-commerse",token);
       navigate("/");
     }catch(err){
        console.log(err);
        setLoading(false);

        if (err.response && err.response.status === 401) {
        
            alert("wrong email or password");
        } else {
            alert("Internal server error");
        }

     }
        // .then(res => {
        //   if (res.data === "success") {
        //     setLoading(false);
            
        //     navigate("/")
        //   } else {
        //     console.log("abdo2")
        //     setLoading(false);
        //     alert("no record existed");
        //   }
        // }).catch(err => console.log(err));
    
  }


  //SingUp fonction

  const [valuessignup, setValuessignup] = useState({
    name: '',
    email: '',
    password: ''
});

const navigatesignup = useNavigate();
const [errorsignup, setErrorsignup] = useState({});


const handleInputsignup = (event) => {
    setValuessignup(prev => ({ ...prev, [event.target.name]: event.target.value }));
}

 async function handleSubmitsignup (event){
    event.preventDefault();
    setLoading(true);
    setErrorsignup();

   try{
       await axios.post("http://localhost:8081/signup", valuessignup);
       setLoading(false);
       //cookie
    //    const token = res.data.token;
    //    cookie.set("e-commerse",token);
       navigate("/",{replace:true});
            // .then(res => { navigatesignup("/login") })
   }catch (err) {

    console.log(err);
    setLoading(false);
    if (err.response && err.response.status === 422) {
        
        alert("Email is already taken");
    } else {
        alert("Internal server error");
    }
}



   

    
}
return (
    <>

    {Loading && <LoadingSubmite/>}
    <div className='Loginpage-container' >
       
        <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
            <div className="form-container sign-up-container">
                <Form onSubmit={handleSubmitsignup}>
                    
               
                    <h1>Create Account</h1>
                    <div className="social-container">
                   
                    <a href="#" className="social"> <i ><FaFacebook /></i></a>
                    <a href="#" className="social"> <i ><FaFacebook /></i></a>
                    <a href="#" className="social"> <i ><FaFacebook /></i></a>
                       
                        
                    </div>
                    <span>or use your email for registration</span>
                    <input
                     type="text"
                     name="name"
                     value={valuessignup.name}
                     onChange={handleInputsignup}
                     placeholder='Enter your name...'
                     minLength={6}
                     required

                       />
                       


                    <input
                     type="email"
                     name="email"
                     onChange={handleInputsignup}
                     value={valuessignup.email}
                     placeholder='Enter your email...'
                     required
                      />
                       


                    <input 

                     type="password"
                     name="password"
                     onChange={handleInputsignup}
                     value={valuessignup.password}
                     placeholder='Enter your password...'
                     minLength={8}
                     required

                    />
                  


                    <button>Sign Up</button>
                    {err !== "" && <span>{err}</span>}
                </Form>
            </div>
            <div className="form-container sign-in-container">



                {/* login container */}

                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="social-container">

                    <a href="#" className="social"> <i ><FaFacebook /></i></a>
                    <a href="#" className="social"> <i ><FaFacebook /></i></a>
                    <a href="#" className="social"> <i ><FaFacebook /></i></a>
                       
                    </div>
                    <span>or use your account</span>

                    
                    <input 
                     type="email"
                     name="email"
                     value={values.email}
                     onChange={handleInput}
                     placeholder='Enter your email...'
                     required
                    />
                    

                    <input 
                     type="password"
                     name="password"
                     value={values.password}
                     onChange={handleInput}
                     placeholder='Enter your password...'
                     minLength={8}
                     required
                    />

                   
                    <a href="#">Forgot your password?</a>
                    <button>Login</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" onClick={handleSignInClick}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
                       {err !== "" && <span>{err}</span>}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </>
    
  );
}