import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-20 '>
            <div className="cardcontainer h-[50vh]  w-1/2 ">
                <div className="card relative flex justify-center items-center rounded-xl w-full h-full bg-[#004D43]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="logo" />
                    <button className='absolute uppercase left-10 bottom-10 px-5 py-1 border-2 border-[#BEDE65] leading-none text-[#BEDE65]  rounded-full font-normal  '>&copy;2019–2022</button>

                </div>
            </div>
            <div className="cardcontainer flex gap-5 h-[50vh]  w-1/2 ">
                <div className="card relative flex justify-center items-center rounded-xl h-full w-1/2 bg-[#1e3a20]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="logo" />
                    <button className='absolute uppercase left-10 bottom-10 px-5 py-1 border-2 border-[#F1F1F1] leading-none text-[#F1F1F1] rounded-full font-normal  tracking-tighter '>Rating 5.0 on Clutch</button>
                </div>
                <div className="card relative flex justify-center items-center rounded-xl h-full w-1/2 bg-[#916110]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="logo" />
                    <button className='absolute uppercase left-10 bottom-10 px-5 py-1 border-2 border-[#F1F1F1] leading-none text-[#F1F1F1] rounded-full font-normal  tracking-tighter '>Business Bootcamp Alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards