import React from 'react'
import "./Newprod.css"
import ProdCard from '../../Card/ProdCard'

export default function Newprod() {
  return (
    <div className='Newprod-continer'>
    <h1>
      Newprod
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
