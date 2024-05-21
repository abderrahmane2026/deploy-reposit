import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../../assetes/logo/logo.png"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand>
          <img src={logo} style={{ width: "120px", marginRight: "100px" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{fontWeight:"600" ,fontSize:"20px"}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/shop" style={{fontWeight:"600" ,fontSize:"20px"}}>Shop</Nav.Link>
            <Nav.Link as={Link} to="/About" style={{fontWeight:"600" ,fontSize:"20px"}}>About</Nav.Link>
            <Nav.Link as={Link} to="/Contact" style={{fontWeight:"600" ,fontSize:"20px"}}>Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto header-links">
            <Nav.Link as={Link} to="/Favorit" style={{fontWeight:"600" ,fontSize:"20px"}}><FaRegHeart /></Nav.Link>
            <Nav.Link as={Link} to="/ShoppingCart" style={{fontWeight:"600" ,fontSize:"20px"}}><FaShoppingCart /></Nav.Link>
            <Nav.Link as={Link} to="/Login" style={{fontWeight:"600" ,fontSize:"20px"}}><FaUser /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
