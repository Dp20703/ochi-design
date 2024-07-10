import React from 'react'

const Featured = () => {
  return (
    <div className="w-full py-20">
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
          <div className="cardContainer w-1/2 h-[75vh] relative">
            <h1 className="absolute z-[9] left-full leading-none tracking-tighter  text-6xl -translate-x-1/2 -translate-y-1/2 top-1/2  text-[#CDEA68] font-bold"> {"FYDE".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="FYDE" />
            </div>
          </div>
          <div className="cardContainer w-1/2 h-[75vh] relative">
            <h1 className="absolute z-[9] right-full leading-none tracking-tighter  text-6xl  translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] font-bold">
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="VISE" />
            </div>
          </div>
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
          <div className="cardContainer w-1/2 h-[75vh] relative">
            <h1 className="absolute z-[9] left-full leading-none tracking-tighter  text-6xl -translate-x-1/2 -translate-y-1/2 top-1/2  text-[#CDEA68] font-bold"> {"TRAWA".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="TRAWA" />
            </div>
          </div>
          <div className="cardContainer w-1/2 h-[75vh] relative">
            <h1 className="absolute z-[9] right-full leading-none tracking-tighter  text-6xl  translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] font-bold">
              {"PREMIUMBLEND".split("").map((item, index) => (
                <span  key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="PREMIUM BLEND" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured