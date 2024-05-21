
import { Link, useNavigate} from "react-router-dom"
import "./newLoginpage.css"
import loginpic from "../../assetes/withoutbackground/login.png"

import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';


import axios from "axios";
import LoadingSubmite from './Loading';
import Cookie from "cookie-universal"

export default function NewLoginPage() {

     //cookie
     const cookie = Cookie();

     //laoding 
     const[Loading,setLoading] = useState(false);
     //navigation
     const navigate = useNavigate();
 
     // error for submite
 
     // const [err,seterr]= useState();
     const [err, seterr]= useState(null);

     


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
    setLoading(true);
    
   
     try{
        const {data} =  await axios.post("http://localhost:8081/loginn", values);
         setLoading(false);
           //cookie
    //    const token = res.data.token;
    //    cookie.set("e-commerse",token);
          window.localStorage.setItem('user' , data.client)
          navigate("/");
     }catch(err){
        console.log(err);
        setLoading(false);

        if (err.response && err.response.status === 401) {
        
            seterr("wrong email or password");
        } else {
            seterr("Internal server error");
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
  return (
    <div>
         {Loading && <LoadingSubmite/>}
      {/* Main Container */}
      <div className="container d-flex justify-content-center mb-5 ">
        {/* Login Container */}
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/* Left Box */}
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#f0f8ff' }}>
            <div className="featured-image mb-3">
              <img src={loginpic} className="img-fluid" style={{ width: '250px' }} alt="logo" />
            </div>
            <p className=" fs-2" style={{  fontWeight: 700 , color:"000000"}}>Be Verified</p>
            <small className=" text-wrap text-center" style={{ width: '17rem' ,color:'black'}}>Join experienced Designers on this platform.</small>
          </div>
          {/* Right Box */}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h1>Login </h1>
                <p>Hello, Again</p>
              </div>

              <Form onSubmit={handleSubmit}>
              <div className="input-group mb-4">


                <input 
                className="form-control form-control-lg bg-light fs-6" 
                type="email"
                name="email"
                value={values.email}
                onChange={handleInput}
                placeholder='Enter your email...'
                required
                />

              </div>


              <div className="input-group mb-3">


                <input 
                 className="form-control form-control-lg bg-light fs-6"
                 type="password"
                 name="password"
                 onChange={handleInput}
                 value={values.password}
                 placeholder='Enter your password...'
                 minLength={8}
                 required

                 />



              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                </div>
                <div className="forgot">
                  <small><a href="#">Forgot Password?</a></small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
              </div>
              <div className="err-masseg  ">
              {err  && <span className="errur">{err}</span>}


              </div>
             
              
              </Form>


              <div className="row mt-3">
                <small>Don't have an account? <Link to={'/singup '} href="#">Sign Up</Link></small>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
