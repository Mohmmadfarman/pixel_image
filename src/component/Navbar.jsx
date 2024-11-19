import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Navbar({getvalue}) {
    const [input,setinput]=useState('')
   

    function handle(){
        // console.log("input",input);
        if(input==''||input==null||input==undefined){
            toast.warning("Please Enter Any catageory name")
            // alert("Please Enter Any catageory name")
        }
        else{
        getvalue(input)
        setinput('')
        }
        
    }

   




  return (
    <div className='w-full h-[67px] bg-[white] flex items-center justify-between  fixed z-50' id='nav1'>
        <img className='rounded-full ml-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUT1kDsZ4mIZQm50b2ut6DHRNNbrrvH9ssWA&s" alt="" width={40}  id='logo'/>
        

        {/* tost container */}
        <ToastContainer position='top-right'/>
        {/*  */}
        <div className='laptop:flex list-none laptop: justify-between laptop: gap-16 tablet:flex tablet:gap-10 desktop:flex desktop:justify-between desktop:gap-14  hidden custom-lg:flex  ' id='list'>
            <li className='text-xl font-semibold cursor-pointer'onClick={()=>{
               
                getvalue('nature')
            }}>Nature</li>
            <li className='text-xl font-semibold cursor-pointer' onClick={()=>{
                
                getvalue('animation')
            }}>Animation</li>
            <li className='text-xl font-semibold cursor-pointer' onClick={()=>{
                
                getvalue('abstract')
            }}>Abstract</li>
            <li className='text-xl font-semibold cursor-pointer' onClick={()=>{
                
                getvalue('sci-fi')
            }}>Sci-fi</li>
             <li className='text-xl font-semibold cursor-pointer' onClick={()=>{
                
                getvalue('Space')
            }}>Space</li>
        </div>
        <div className='flex' id='nav'>
            <input className='p-1  min-w-max pr-24 rounded-sm border-none bg-[#d6cbcb] placeholder:text-black '  type="text" placeholder='Enter Catageory name ' onChange={(e)=>setinput(e.target.value) 
            } value={input}/>
            <button className='mr-16 p-2 bg-[#070102] rounded-sm  text-white' onClick={handle}><FaSearch /></button>
        </div>
      
    </div>
  )
}

export default Navbar
