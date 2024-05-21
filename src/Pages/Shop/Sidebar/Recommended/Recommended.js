import Button from "../../../../commponent/secondpart/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <div className="recommended-container">
      <div className="recommended-title">Recommended</div>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Hp" title="Hp" />
        <Button onClickHandler={handleClick} value="Dell" title="Dell" />
        <Button onClickHandler={handleClick} value="Samsung" title="Samsung" />
        <Button onClickHandler={handleClick} value="Iphone" title="Iphone" />
        <Button onClickHandler={handleClick} value="Xiaomi" title="Xiaomi" />
      </div>
    </div>
  );
};

export default Recommended;
