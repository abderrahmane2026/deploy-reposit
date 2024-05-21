import React from 'react'
import ProdCard from '../Card/ProdCard'
import "./Prodect.css"
import Populer from './Populers/Populer'
import Offers from './Offers/Offers'
import Newprod from './Newprod/Newprod'
export default function Prodect() {
  return (
    <div className='prodect-container'>
      <Newprod/>
      <Populer/>
      <Offers/>

    </div>
  )
}
