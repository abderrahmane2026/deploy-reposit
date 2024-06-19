import React from 'react'
import "./Hero.css"
import heroimg from "../../assetes/picturs/Sport family-pana.png"
import { Link } from 'react-router-dom'
export default function Hero () {
  return (
    <div className='Hero-section'>
         
     <div className='hero-dicription'>
     <h1>
            The perfect Choice for <span>Clubs and Acedemies.</span>
           </h1>

            <p>            Discover the best sports clubs and academies our leading platform for easy facilitation and the right choice

             </p>

                <Link to="/Login"> <button>Register New</button></Link>
             
     </div>

     <div className='hero-img'>

         <img src={heroimg} alt=''/>

     </div>

    </div>
  )
}