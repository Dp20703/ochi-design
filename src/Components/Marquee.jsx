import { motion } from 'framer-motion'
import React from 'react'


const Marquee = () => {
  return (
    <div className=' w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl '>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
      <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[24vw] font-bold leading-none uppercase mb-10 pt-10'>WE ARE OCHI </motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[24vw] font-bold leading-none uppercase mb-10 pt-10'>WE ARE OCHI </motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[24vw] font-bold leading-none uppercase mb-10 pt-10'>WE ARE OCHI </motion.h1>
     </div>
    </div>
  )
}

export default Marquee