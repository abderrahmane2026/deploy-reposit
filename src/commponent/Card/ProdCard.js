import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import pic from "../../assetes/picturs/Business mission-pana.png"
import './card.css';

function ProdCard(props) {
  return (
    <div className="card-container">
      
      <div className='image'>
      <Link to={`/product/${props.id}`}> 
      {
        console.log("abdo")
      }
      <img src={props.image} alt='pictur'/> </Link>
      </div>
      <div className='description'>
        <div className="name">
        <h3>{props.name}</h3>

        </div>
       

        <div className="ratting">
        <i><FaStar/></i>
        <i><FaStar/></i>
        <i><FaStar/></i>
        <i><FaStar/></i>
        <i><FaRegStar/></i>
        <p>(15 reviw)</p>

        </div>

        <div className='price'>
        <h4>{props.new_price}</h4>
        </div>

      

      </div>
        

     
    </div>
   

  );
}

export default ProdCard;
