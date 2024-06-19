import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './card.css';

function ProdCard(props) {
  return (
    <div className="card-container">
      
      <div className='image'>
      <Link to={`/product/${props.id}`}> <img src={props.image} alt=''/> </Link>
      </div>
      <div className='description'>
        <div className="name">
        <h4>{props.name}</h4>

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
        <h4>{props.new_price}</h4><h5><del>{props.old_price}</del></h5>
        </div>

        <button><FaShoppingCart/></button>

      </div>
        

     
    </div>
   

  );
}

export default ProdCard;
