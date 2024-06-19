import React from 'react'
import ProdCard from '../../Card/ProdCard'
import "./Populer.css"
import ProdCardtest from '../../testcart/ProdCardtest'

export default function Populer() {
  return (
    <div className='populer-continer'>
      <h1>
        Populer
        <hr/>
      </h1>
      <div className='prod-continer'>
         <ProdCardtest/>
         <ProdCardtest/>
         <ProdCardtest/>
         <ProdCardtest/>
         <ProdCardtest/>
         <ProdCardtest/>

      
        
      </div>

    </div>
  )
}
