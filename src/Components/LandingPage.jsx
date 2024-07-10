import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <div className='data-scroll data-scroll-section data-scroll-speeed="-.3" bg-zinc-900 h-screen w-full pt-1'>

            <div className="textStructure mt-20 px-20 ">
                {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
                    return (<div key={index} className="masker">
                        <div className="flex w-fit items-end overflow-hidden ">
                            {index === 1 &&
                                <motion.div initial={{ width: 0 }} animate={{ width: '9vw' }} className='w-[9vw] h-[6.5vw] bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center mr-[1vw] rounded-md -top-[0.5vw]  relative'>
                                </motion.div>}
                            <h1 className="uppercase pt-[2vw] mb-[.5vw] text-[9vw] leading-[6.5vw] tracking-tighter font-bold" >{item}</h1>
                        </div>
                    </div>)
                })}
            </div>

            <div className="border-zinc-800 mt-20 border-t-[1px] flex justify-between items-center py-5 px-20 ">

                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='text-md font-light tracking-light leading-none'>{item}</p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className='px-5 py-2 border-[1px] uppercase text-md font-light border-zinc-400 rounded-full'>Start the Project
                    </div>

                    <div className="h-10 w-10 border-[1px] flex justify-center items-center border-zinc-400 rounded-full">
                        <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LandingPage