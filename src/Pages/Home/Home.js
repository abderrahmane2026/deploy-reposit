import React from 'react'
import "./Home.css"
import Hero from '../../commponent/HeroSection/Hero'
import Service from '../../commponent/HeroSection/service'
import Catigory from '../../commponent/Catigory/Catigory'
import Footer from '../../commponent/Footer/Footer'
import Prodect from '../../commponent/Prodect/Prodects'



export default function Home() {
  return (
    <div className="homepage">
      <Hero/>
      <Service/>
      <Catigory/>
      <Prodect/>
     

      
    </div>
  )
}
