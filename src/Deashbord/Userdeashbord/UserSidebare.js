
import React, { useState } from 'react';
import { FaBoxOpen, FaUser, FaList, FaCog, FaShoppingCart, FaSignOutAlt, FaBars } from 'react-icons/fa';
import {  Link } from 'react-router-dom';
import "./Userdeashbord.css"



export default function UserSidebare() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      
      <button className="collapse-btn" onClick={handleCollapse}>
        <FaBars />
      </button>
      <ul>
        <li>
          <button>
            <Link to={"AddProdect"}>
           
            <FaBoxOpen />
            {!isCollapsed && ' Add Product'}
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={""}>
            
            <FaUser />
            {!isCollapsed && ' Account'}
            </Link>
          </button>
        </li>
        <li>
          <button>
          <Link to={"prodects"}>
            <FaList />
            {!isCollapsed && ' List of Products'}
            </Link>
          </button>
        </li>
        <li>
          <button>
          <Link to={"setting"}>
            <FaCog />
            {!isCollapsed && ' Settings'}
            </Link>
          </button>
        </li>
        <li>
          <button>
          <Link to={"Orders"}>
            <FaShoppingCart />
            {!isCollapsed && ' Orders'}
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={"/Login"}>
           
            <FaSignOutAlt />
            {!isCollapsed && ' Logout'}
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );

    
    
  
}
