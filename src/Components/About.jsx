import React from 'react'

const About = () => {
  return (
    <div className='w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl p-20 text-black'>
      <h1 className='text-[4vw] tracking-tight font-["Neue_Montreal"] leading-[4A.5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#a1b562]'>
        <div className='w-1/2'>
          <h1 className='text-7xl '>Our approach:</h1>
          <button className='flex gap-10 items-center rounded-full px-10 py-6  bg-zinc-900 text-white uppercase mt-10'>Read more
            <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl"></div>
      </div>
    </div>
  )
}

export default About