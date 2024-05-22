import Input from "../../../../commponent/secondpart/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
        handleChange={handleChange}
        value="under200"
        title="Under $200"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="under500"
        title="Under $500"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="under1000"
        title="Under $1000"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="over1000"
        title="Over $1000"
        name="price"
      />
      </div>
    </>
  );
};

export default Price;
