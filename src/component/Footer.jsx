import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";




function Footer() {
  return (
    <div className='flex items-center w-full h-[300px] mt-9  justify-around ' id='footer'>
        <div className='w-[300px] flex flex-col'>
            <h1 className='text-xl font-semibold'>Free photos and videos shared by talented creators.</h1>
            <h2 className='mt-2 text-xl font-normal'>Download one of our apps.</h2>
            <div className='flex gap-3 mt-4'>
                <button className='bg-[white] p-2 rounded-md flex items-center gap-2'><BsAndroid2 />Android</button>
                <button className='bg-[white] p-2 rounded-md flex items-center gap-1'><FaApple />iOS</button>
            </div>
            <div className='flex gap-5 list-none '>
                <li className='mt-4 text-xl'><FaFacebookF /></li>
                <li className='mt-4 text-xl'><FaInstagram /></li>
                <li className='mt-4 text-xl'><FaGooglePlus /></li>
                <li className='mt-4 text-xl'><FaTwitterSquare />
                </li>

            </div>
        </div>
        <div className='flex flex-col w-[130px] gap-3'>
            <h1 className='text-2xl'>Pexels</h1>
            <h3 className='text-xl'>Free Stock</h3>
            <h3 className='text-xl'>Photos</h3>
            <h3 className='text-xl'>Popular</h3>
            <h3 className='text-xl'>Collections</h3>
        </div>
        <div className='flex flex-col w-[200px] gap-3'>
            <h1 className='text-2xl'>Company</h1>
            <h3 className='text-xl'>About</h3>
            <h3 className='text-xl'>Vlog</h3>
            <h3 className='text-xl'>FAQ</h3>
            <h3 className='text-xl'>Report Content</h3>
        </div>
        <div className='flex flex-col w-[140px] gap-3'>
            <h1 className='text-2xl'>Free Stock Photos</h1>
            <button className='p-1 border border-black bg-white rounded-md' id='bot'>Black and white photography</button>
            <button className='p-1 border border-black bg-white rounded-md' id='bot'>4K Wallpapers</button>
            <button className='p-1 border border-black bg-white rounded-md' id='bot'>Dark</button>
        </div>

       
      
    </div>
  )
}

export default Footer
