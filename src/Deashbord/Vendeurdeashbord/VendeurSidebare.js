import React, { useState, useEffect } from 'react';
import { FaBoxOpen, FaUser, FaList, FaCog, FaShoppingCart, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Vendeurdeashbord.css";

export default function VendeurSidebare() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
      
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`deachbord-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="collapse-btn" onClick={handleCollapse}>
        <FaBars />
      </button>
      <ul>
        <li>
          <Link to="account">
            <FaUser />
            {!isCollapsed && ' Account'}
          </Link>
        </li>
        <li>
          <Link to="AddProduct">
            <FaBoxOpen />
            {!isCollapsed && ' Add Club'}
          </Link>
        </li>
        <li>
          <Link to="products">
            <FaList />
            {!isCollapsed && ' List of Clubs'}
          </Link>
        </li>
        <li>
          <Link to="settings">
            <FaCog />
            {!isCollapsed && ' Settings'}
          </Link>
        </li>
        <li>
          <Link to="orders">
            <FaShoppingCart />
            {!isCollapsed && ' Orders'}
          </Link>
        </li>
        <li  >
          <a onClick={() => {
            window.localStorage.removeItem('userr')
           window.location.href = '/'
          }}>
            <FaSignOutAlt  />
            {!isCollapsed && ' Logout'}
          </a>
        </li>
        
      </ul>
    </div>
  );
}
