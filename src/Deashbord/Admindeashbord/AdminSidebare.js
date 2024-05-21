import React, { useState, useEffect } from 'react';
import { FaBoxOpen, FaUser, FaList, FaCog, FaShoppingCart, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Admine.css";

export default function AdminSidebare() {
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
          <Link to="users">
            <FaUser />
            {!isCollapsed && ' Users'}
          </Link>
        </li>
        <li>
          <Link to="Sallers">
            <FaBoxOpen />
            {!isCollapsed && ' Sellers'}
          </Link>
        </li>
        
        <li>
          <Link to="settings">
            <FaCog />
            {!isCollapsed && ' Settings'}
          </Link>
        </li>
        <li>
          <Link to="reports">
            <FaShoppingCart />
            {!isCollapsed && ' reports'}
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignOutAlt />
            {!isCollapsed && ' Logout'}
          </Link>
        </li>
      </ul>
    </div>
  );
}
