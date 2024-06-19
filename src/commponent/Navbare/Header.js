import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../../assetes/logo/startup-logo.png"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header() {
  const navigate = useNavigate(); 
  window.localStorage.setItem("user","uiehhuieh")
  const handleProfileOnClick = () => {
    console.log(window.localStorage.getItem('user')); 
    if(window.localStorage.getItem('user')!=null){
      navigate('/Dashboard'); 
    }else{
      navigate("/Login")
      console.log('you are not logged in'); 
    }
  }

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand>
          <img src={logo} style={{ width: "150px", marginRight: "100px" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{fontWeight:"600" ,fontSize:"20px"}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/shop" style={{fontWeight:"600" ,fontSize:"20px"}}>Our Clubs</Nav.Link>
            <Nav.Link as={Link} to="/About" style={{fontWeight:"600" ,fontSize:"20px"}}>About</Nav.Link>
            <Nav.Link as={Link} to="/News" style={{fontWeight:"600" ,fontSize:"20px"}}>News</Nav.Link>
            <Nav.Link as={Link} to="/Contact" style={{fontWeight:"600" ,fontSize:"20px"}}>Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto header-links">
            <Nav.Link as={Link} to="/Favorit" style={{fontWeight:"600" ,fontSize:"20px"}}><FaRegHeart /></Nav.Link>
            <Nav.Link as={Link} to="/ShoppingCart" style={{fontWeight:"600" ,fontSize:"20px"}}><FaShoppingCart /></Nav.Link>
            <Nav.Link style={{fontWeight:"600" ,fontSize:"20px"}} onClick={handleProfileOnClick}><FaUser /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
