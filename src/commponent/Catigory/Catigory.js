import React from 'react'
import "./Catigory.css"
import { Link } from 'react-router-dom'
import laptop from "../../assetes/picturs/catigory/laptop.png"
import headphone from "../../assetes/picturs/catigory/headphone.png"
import iphone from "../../assetes/picturs/catigory/iphone.png"
import Tv from "../../assetes/picturs/catigory/Tv.png"
import screen from "../../assetes/picturs/catigory/screen.png"

export default function 
() {
  return (
    <div className='Catigory-section'>

        {/* first catigory */}
        <div className='container-one-catigory'>
            
        <div className='catigory-one'>

        
        <div className='hero-dicription'>
            <h1>Computer</h1>

            <p>Cards stack on top of each other after some interval.
                 Perfect for showing testimonials.
                Perfect for showing testimonials
                </p>

                <Link to="/shop"> <button>Shop New</button></Link>
             
     </div>

     <div className='hero-img'>

         <img src={laptop} alt=''/>

     </div>
     </div>

     <div className='catigory-one'>

        
        <div className='hero-dicription'>
            <h1>Tv screen</h1>

            <p>Cards stack on top of each other after some interval.
                 Perfect for showing testimonials.
                Perfect for showing testimonials
                </p>

                <Link to="/shop"> <button>Shop New</button></Link>
             
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
            <h1>Accessories</h1>

            <p>Cards stack on top of each other after some interval.
                 Perfect for showing testimonials.
                Perfect for showing testimonials
                </p>

                <Link to="/shop"> <button>Shop New</button></Link>
             
     </div>

     <div className='hero-img'>

         <img src={headphone}  alt=''/>

     </div>
     </div>

       {/* last catigory */}
     <div className='catigory-three'>

        
        <div className='hero-dicription'>
            <h1> phone </h1>

            <p>Cards stack on top of each other after some interval.
                 Perfect for showing testimonials.
                Perfect for showing testimonials
                </p>

                <Link to="/shop"> <button>Shop New</button></Link>
             
     </div>

     <div className='hero-img'>

         <img src={screen} alt=''/>

     </div>
     </div>
     </div>

    </div>
  )
}
