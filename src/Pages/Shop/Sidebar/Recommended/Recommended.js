import Button from "../../../../commponent/secondpart/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <div className="recommended-container">
      <div className="recommended-title">Recommended</div>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All Clubs" />
        <Button onClickHandler={handleClick} value="Team" title="Team" />
        <Button onClickHandler={handleClick} value="Individual" title="Individual" />
        <Button onClickHandler={handleClick} value="Combat" title="Combat" />
        <Button onClickHandler={handleClick} value="Recreational" title="Recreational" />
        <Button onClickHandler={handleClick} value="Bodybuilding" title="Bodybuilding" />
      </div>
    </div>
  );
};

export default Recommended;
