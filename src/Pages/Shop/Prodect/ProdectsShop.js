import React from 'react'
import "./Prodects.css"
import ProdCard from '../../../commponent/Card/ProdCard'
import all_product from '../../../assetes/all_product'

export default function Prodects({ result }) {
  return (
    <div className='Prodect-container'>
      {result}

{/* {all_product.map((item,i)=>{
        return <ProdCard key={i} id={item.id}
                         name={item.name} 
                         image={item.image} 
                         oledprice={item.old_price}
                         newprice={item.new_price} 
                         />
                         
      })} */}
    </div>
  )
}
