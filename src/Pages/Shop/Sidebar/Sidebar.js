import Category from "./Category/Category";
import Price from "./Price/Price";

import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <div className="Shop-sidebar">
      <div className="Shop-sidebar-container">
        <div className="sidbare-contant">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
