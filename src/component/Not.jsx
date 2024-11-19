import React from 'react'
import img from '../assets/not_found.png'


import { ShimmerSimpleGallery } from "react-shimmer-effects";

function Not() {
  return (
    <div className='w-full h-[300px] flex items-center justify-center'>
      <img style={{opacity:'0.5'}} src={img} alt="Not_found" width={400} />
                
               
                  
                

      
    </div>
  )
}

export default Not
