import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handlerHover = (index) => {
    cards[index].start[{ y: "0" }]

  }
  const handlerHoverEnd = (index) => {
    cards[index].start[{ y: "100%" }]
  }
  return (
    <div data-scroll data-scroll-section className=" w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl tracking-tight'>Featured projects</h1>
      </div>

      <div className="px-20 ">
        <div className="text flex w-full items-center gap-10 mt-12 py-6">
          <div className="py-6 flex items-center w-1/2">
            <div className="bg-zinc-100 rounded-full h-3 w-3 flex items-center ">
              <h1 className='text-white text-regular px-5 '>FYDE</h1>
            </div>
          </div>
          <div className=" py-6 flex items-center  w-1/2">
            <div className="bg-zinc-100 rounded-full h-3 w-3 flex items-center ">
              <h1 className='text-white text-regular px-5 '>VISE</h1>
            </div>
          </div>
        </div>

        <div className="cards w-full flex gap-10">
          <motion.div onHoverStart={() => handlerHover(0)} onHoverEnd={() => handlerHoverEnd(0)} className="cardContainer w-1/2 h-[75vh] relative">
            <h1 className="flex overflow-hidden  absolute z-[9] left-full leading-none tracking-tighter  text-6xl -translate-x-1/2 -translate-y-1/2 top-1/2  text-[#CDEA68] font-bold">
              {"FYDE".split("").map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }} className='inline-block' key={index}>{item}</motion.span>
              ))}</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="FYDE" />
            </div>
          </motion.div>
          <motion.div onHoverStart={() => handlerHover(1)} onHoverEnd={() => handlerHoverEnd(1)} className="cardContainer w-1/2 h-[75vh] relative">
            <h1 className="flex overflow-hidden absolute z-[9] right-full  leading-none tracking-tighter  text-6xl  translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] font-bold">
              {"VISE".split("").map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }} className='inline-block' key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="VISE" />
            </div>
          </motion.div>

        </div>
      </div>
      <div className="px-20 ">
        <div className="text flex w-full items-center gap-10 mt-12 py-6">
          <div className="py-6 flex items-center w-1/2">
            <div className="bg-zinc-100 rounded-full h-3 w-3 flex items-center ">
              <h1 className='text-white text-regular px-5 '>TRAWA</h1>
            </div>
          </div>
          <div className=" py-6 flex items-center  w-1/2">
            <div className="bg-zinc-100 rounded-full h-3 w-3 flex items-center ">
              <h1 className='text-white text-regular px-5 text-nowrap '>PREMIUM BLEND</h1>
            </div>
          </div>
        </div>

        <div className="cards w-full flex gap-10">
          <motion.div onHoverStart={() => handlerHover(3)} onHoverEnd={() => handlerHoverEnd(3)} className="cardContainer w-1/2 h-[75vh] relative">
            <h1 className=" flex overflow-hidden absolute z-[9] left-full leading-none tracking-tighter  text-6xl -translate-x-1/2 -translate-y-1/2 top-1/2  text-[#CDEA68] font-bold"> {"TRAWA".split("").map((item, index) => (
              <motion.span initial={{ y: "100%" }} animate={cards[3]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }} className='inline-block' key={index}>{item}</motion.span>
            ))}</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="TRAWA" />
            </div>
          </motion.div>
          <motion.div onHoverStart={() => handlerHover(3)} onHoverEnd={() => handlerHoverEnd(3)} className="cardContainer w-1/2 h-[75vh] relative">
            <h1 className="flex overflow-hidden absolute z-[9] right-full leading-none tracking-tighter  text-6xl  translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] font-bold">
              {"PREMIUMBLEND".split("").map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate={cards[4]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }} className='inline-block' key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="PREMIUM BLEND" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured