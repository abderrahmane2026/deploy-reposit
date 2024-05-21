import React from "react";
import { FaLaptop, FaMobileAlt, FaHeadphones, FaDesktop, FaTh } from "react-icons/fa";
import "./Category.css";
import Input from "../../../../commponent/secondpart/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>
          <span className="category-text">All</span>
          <FaTh className="category-icon" />
        </label>
        <Input
          handleChange={handleChange}
          value="Screen"
          title="Screen"
          name="test"
          icon={<FaDesktop className="category-icon" />}
        />
        <Input
          handleChange={handleChange}
          value="Phone"
          title="Phone"
          name="test"
          icon={<FaMobileAlt className="category-icon" />}
        />
        <Input
          handleChange={handleChange}
          value="Accessories"
          title="Accessories"
          name="test"
          icon={<FaHeadphones className="category-icon" />}
        />
        <Input
          handleChange={handleChange}
          value="Computer"
          title="Computer"
          name="test"
          icon={<FaLaptop className="category-icon" />}
        />
      </div>
    </div>
  );
}

export default Category;
