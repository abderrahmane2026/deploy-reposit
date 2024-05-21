import React from 'react'
import "./Hero.css"
import heroimg from "../../assetes/picturs/hero1.png"
import { Link } from 'react-router-dom'
export default function Hero () {
  return (
    <div className='Hero-section'>
         
     <div className='hero-dicription'>
            <h1>Shop Computer & Accessories</h1>

            <p>Cards stack on top of each other after some interval.
                 Perfect for showing testimonials.
                Perfect for showing testimonials
                </p>

                <Link to="/shop"> <button>Shop New</button></Link>
             
     </div>

     <div className='hero-img'>

         <img src={heroimg} alt=''/>

     </div>

    </div>
  )
}