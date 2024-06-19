import React from 'react'
import "./Catigory.css"
import { Link } from 'react-router-dom'
import laptop from "../../assetes/picturs/catigory/Soccer-rafiki.png"
import headphone from "../../assetes/picturs/catigory/Breathing exercise-bro.png"

import Tv from "../../assetes/picturs/catigory/Boxing-bro.png"
import screen from "../../assetes/picturs/catigory/Gym-rafiki.png"

export default function 
() {
  return (
    <div className='Catigory-section'>

        {/* first catigory */}
        <div className='container-one-catigory'>
            
        <div className='catigory-one'>

        
        <div className='hero-dicription'>
            <h1>Football</h1>

            <p>Cards stack on top of each other after some interval.
                 Perfect for showing testimonials.
                Perfect for showing testimonials
                </p>

                <Link to="/shop"> <button>Register New</button></Link>
             
     </div>

     <div className='hero-img'>

         <img src={laptop} alt=''/>

     </div>
     </div>

     <div className='catigory-one'>

        
        <div className='hero-dicription'>
            <h1>Fight Clubs</h1>

            <p>Cards stack on top of each other after some interval.
                 Perfect for showing testimonials.
                Perfect for showing testimonials
                </p>

                <Link to="/shop"> <button>Register New</button></Link>
             
     </div>

     <div className='hero-img'>

         <img src={Tv} alt=''/>

     </div>
     </div>

      </div>
       {/* second catigory */}

       <div className='container-two-catigory'>

       
     <div className='catigory-Two'>

        
        <div className='hero-dicription'>
            <h1>Meditation Clubs</h1>

            <p>Cards stack on top of each other after some interval.
                 Perfect for showing testimonials.
                Perfect for showing testimonials
                </p>

                <Link to="/shop"> <button>Register New</button></Link>
             
     </div>

     <div className='hero-img'>

         <img src={headphone}  alt=''/>

     </div>
     </div>

       {/* last catigory */}
     <div className='catigory-three'>

        
        <div className='hero-dicription'>
            <h1> Bodybuilding Clubs </h1>

            <p>Cards stack on top of each other after some interval.
                 Perfect for showing testimonials.
                Perfect for showing testimonials
                </p>

                <Link to="/shop"> <button>Register New</button></Link>
             
     </div>

     <div className='hero-img'>

         <img src={screen} alt=''/>

     </div>
     </div>
     </div>

    </div>
  )
}
