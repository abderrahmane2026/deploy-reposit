import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../assetes/logo/logo.png';
import './Footer.css';


export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com"><FaFacebook /></a>
                <a href="https://www.twitter.com"><FaTwitter /></a>
                <a href="https://www.instagram.com"><FaInstagram /></a>
            </div>
        </div>
    </footer>
);


}