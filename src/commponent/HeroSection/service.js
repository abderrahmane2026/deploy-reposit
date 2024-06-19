import React from 'react'
import "./service.css"
import serv1 from "../../assetes/picturs/service/pngegg (1).png"
import serv2 from "../../assetes/picturs/service/pngegg (2).png"
import serv3 from "../../assetes/picturs/service/pngegg (3).png"
import serv4 from "../../assetes/picturs/service/pngegg (4).png"


export default function Service() {
  return (
    <div className='service-section'>

       <div className='service-1'>
       
        <img src={serv1}/>
        <h3>SEARCHABILITY</h3>
       </div>

       <div className='service-1'>
       
       <img src={serv2}/>
       <h3>SUPPORT TEAM</h3>
       </div>
       
       <div className='service-1'>
       
        <img src={serv3}/>
        <h3>GUARANTEE</h3>
       </div>

       <div className='service-1'>
        
       <img src={serv4}/>
       <h3>INTERNATIONALE</h3>
       </div>
    </div>
  )
}
