import clubpic from "../../assetes/picturs/clubs/clubpic.jpg"
import { FaArrowRight } from 'react-icons/fa';

import './card.css';

function ProdCardtest() {
  return (
    <div className="card-containertest">
      <div className='image'>
        <img src={clubpic} alt=''/>
      </div>
      <div className='discription'>
        <h4>Club Name</h4>
        <p>small text about club to atract peaple</p>
        <div className='price'>
        <h4>$400</h4>
        <button><FaArrowRight/></button>

        </div>

      </div>
        

     
    </div>
  );
}

export default ProdCardtest;
