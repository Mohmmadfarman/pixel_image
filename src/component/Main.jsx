import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main({ data, shimmer }) {
  const boxVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 10 },
  };
  const notify = () => {
    toast.success("Liked ..  ❤️");
  };

  return (
    <div className="w-full h-max bg-[#908a8ae0] flex flex-wrap justify-around gap-7 pb-16">
      <ToastContainer position="top-right" />
      {data.map((i, index) => {
        return (
          <div key={index} className="mt-4" id="box">
            <motion.div
              variants={boxVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7 }}
              key={index}
              className="h-[300px] mt-5 mb-7 relative"
              id="box"
            >
              <h1 className="absolute right-3 top-2 text-2xl" onClick={notify} id="like">
                <FcLike />
              </h1>
              <img className="rounded-md" src={i.src.medium} alt="" id="img1"/>
              <button id="btn2">Download</button>
              <button className="text-white absolute right-5 bottom-0  bg-[#2d542d] p-3 pl-3 pr-3 rounded-md flex " id="btn">
                <span className="mt-[5px] mr-[10px]">
                  <FaArrowDown />
                </span>
                <a href={i.url} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </button>
            </motion.div>
            
          </div>
          
        );
      })}
      
    </div>
  );
}

export default Main;
