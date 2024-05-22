import { Link, useNavigate } from "react-router-dom";
import "./newLoginpage.css";
import loginpic from "../../assetes/withoutbackground/login.png";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import LoadingSubmite from './Loading';
import Cookie from "cookie-universal";

export default function NewSignPage() {
  const cookie = Cookie();
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [err, seterr] = useState(null);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    role: 'client', // default value
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
    console.log(name, value); // Added for debugging
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post("/api/user/signup", values);
      setLoading(false);
      navigate("/Login", { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.response && err.response.status === 422) {
        seterr("Email is already taken");
      } else {
        seterr("Internal server error");
      }
    }
  };

  return (
    <div>
      {Loading && <LoadingSubmite />}
      <div className="container d-flex justify-content-center mb-5">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#f0f8ff' }}>
            <div className="featured-image mb-3">
              <img src={loginpic} className="img-fluid" style={{ width: '250px' }} alt="logo" />
            </div>
            <p className="fs-2" style={{ fontWeight: 700, color: "#000000" }}>Be Verified</p>
            <small className="text-wrap text-center" style={{ width: '17rem', color: 'black' }}>Join experienced Designers on this platform.</small>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h1>SignUp</h1>
                <p>hollo.</p>
              </div>

              <Form onSubmit={handleSubmit}>
                <div className="input-group mb-4">
                  <input 
                    className="form-control form-control-lg bg-light fs-6"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleInput}
                    placeholder='Enter your name...'
                    minLength={6}
                    required
                  />
                </div>

                <div className="input-group mb-4">
                  <input 
                    className="form-control form-control-lg bg-light fs-6"
                    type="email"
                    name="email"
                    onChange={handleInput}
                    value={values.email}
                    placeholder='Enter your email...'
                    required
                  />
                </div>
                
                <div className="input-group mb-4">
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

                <div className="input-group mb-4">
                  <select 
                    className="form-control form-control-lg bg-light fs-6"
                    name="role"
                    value={values.role}
                    onChange={handleInput}
                    required
                  >
                    <option value="client">Client</option>
                    <option value="seller">Seller</option>
                  </select>
                </div>

                <div className="input-group mb-5 d-flex justify-content-between">
                  <div className="form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="formCheck"
                    />
                    <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                  </div>
                  <div className="forgot">
                    <small><a href="#">Forgot Password?</a></small>
                  </div>
                </div>
                
                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-primary w-100 mb-2 fs-6">SignUp</button>
                </div>

                <div className="err-masseg">
                  {err && <span className="errur">{err}</span>}
                </div>
              </Form>
             
              <div className="row mt-3">
                <small>I have an account <Link to={"/Login"}>Login</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
