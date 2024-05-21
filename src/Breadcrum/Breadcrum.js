import React from 'react';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import './Breadcrum.css';

export default function Breadcrum({ product }) {
  return (
    <div className='breadcrumb-container'>

    
    <div className='breadcrumb'>
      <div className='breadcrumb-item'>
        <FaHome className='breadcrumb-icon' />
        <span>Home</span>
      </div>
      <FaChevronRight className='breadcrumb-arrow' />
      <div className='breadcrumb-item'>
        <FaShop className='breadcrumb-icon' />
        <span>Shop</span>
      </div>
      <FaChevronRight className='breadcrumb-arrow' />
      <div className='breadcrumb-item'>
        <span>{product.category}</span>
      </div>
      <FaChevronRight className='breadcrumb-arrow' />
      <div className='breadcrumb-item'>
        <span>{product.name}</span>
      </div>
    </div>

    </div>
  );
}
