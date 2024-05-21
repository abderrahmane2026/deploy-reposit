import React from 'react'
import ProdCard from '../../Card/ProdCard'
import "./Populer.css"

export default function Populer() {
  return (
    <div className='populer-continer'>
      <h1>
        Populer
        <hr/>
      </h1>
      <div className='prod-continer'>
         <ProdCard/>
         <ProdCard/>
         <ProdCard/>
         <ProdCard/> 
         <ProdCard/>
      
        
      </div>

    </div>
  )
}
