import React from 'react'
import "./Offers.css"
import ProdCard from '../../Card/ProdCard'
import new_collections from '../../../assetes/new_collections'

export default function Offers() {
  return (
    <div className='Offer-continer'>
    <h1>
      Offers
      <hr/>
    </h1>
    <div className='prod-continer'>
      {new_collections.map((item,i)=>{
        return <ProdCard key={i} id={item.id}
                         name={item.name} 
                         image={item.image} 
                         oledprice={item.old_price}
                         newprice={item.new_price} 
                         />
                         
      })}
       {/* <ProdCard/>
       <ProdCard/>
       <ProdCard/>
       <ProdCard/> 
       <ProdCard/> */}
    
      
    </div>

  </div>
  )
}
