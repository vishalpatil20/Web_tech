
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} 
   whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative flex shrink-0 w-60 h-72 rounded-[45px] bg-zinc-400 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
       <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
       <div className='footer absolute bottom-0 w-full left-0'>
       <div className='flex items-center justify-between py-3 px-8 mb-3'>
        <h5>{data.filesize}</h5>
        <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoCloseOutline /> : <LuDownload size=".7em" color='#fff'/> }
            {/* <LuDownload size=".7em" color='#fff'/> */}
        </span> 
         </div>
         {data.tag.isOpen ? (<div className={`tag w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600": "bg-green-600" } flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
         </div>) : null}
         
       </div>
    </motion.div>
  );
}

export default Card
