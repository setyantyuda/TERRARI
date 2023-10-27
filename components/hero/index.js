/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const HeroBanner = () => {
  return (
    <div className='h-[400px] flex relative pt-[72px]'>
        <div className='my-auto absolute z-10 bottom-40 pl-12 text-white text-5xl font-bold bg-[#737373] p-4 rounded-r-full'>
        Make your life easier with us!
        </div>
        <img src='/bg.jpg' alt='' className='absolute z-0 w-full h-full object-cover rounded-b-xl'/>
    </div>
  )
}
