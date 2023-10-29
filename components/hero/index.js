
import React from 'react'

export const HeroBanner = () => {
  return (
    <div className='h-[400px] flex relative'>
        <div className='my-auto absolute z-10 bottom-40 pl-12 pr-8 text-black md:text-5xl text-2xl font-bold bg-[#ffffff] p-4 rounded-r-full'>
          Make your life easier with us!
        </div>
        <img src='/bg.jpg' alt='' className='absolute z-0 w-full h-full object-cover rounded-b-xl'/>
    </div>
  )
}
