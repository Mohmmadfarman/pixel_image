import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import NOnet from '../assets/no-internet.png'

function Offnet() {
  return (
    <div>
        <Navbar/>
         <div className='flex flex-col items-center'>
         <p className='pt-20 text-center font-Poppins text-2xl font-semibold'>No Internet Connection.. Please Connect the Internet</p>
         <img className='text-center' src={NOnet} alt="" width={300} />
         </div>
        <Footer/>
      
    </div>
  )
}

export default Offnet;