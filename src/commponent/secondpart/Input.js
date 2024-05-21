import React from "react";

const Input = ({ handleChange, value, title, name, icon }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark"></span>
      <span className="category-text">{title}</span>
      {icon}
    </label>
  );
};

export default Input;
