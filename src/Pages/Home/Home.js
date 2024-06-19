import React from 'react'
import "./Home.css"
import Hero from '../../commponent/HeroSection/Hero'
import Service from '../../commponent/HeroSection/service'
import Catigory from '../../commponent/Catigory/Catigory'
import Footer from '../../commponent/Footer/Footer'
import Prodect from '../../commponent/Prodect/Prodects'
import Pricin from '../../commponent/pricin/Pricin'
import Servicesection from '../../commponent/servise/service'
import NewsSection from '../../commponent/NewsSection/NewsSection'



export default function Home() {
  return (
    <div className="homepage">
      <Hero/>
      
      <Service/>
      <Servicesection/>
      <Catigory/>
      <NewsSection/>
      <Prodect/>
      <Pricin/>
     

      
    </div>
  )
}
