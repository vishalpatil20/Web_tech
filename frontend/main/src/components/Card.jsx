import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className='relative flex shrink-0 w-72 h-80 rounded-[16px] border border-black bg-zinc-400 text-black px-8 py-10 overflow-hidden'
    >
      <FaRegFileAlt size={32} className='mb-4' />
      <p className='text-lg font-bold leading-tight mb-2'>{data.title}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between py-10 px-8'>
        <p className='text-sm leading-tight mb-8'>{data.text}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
