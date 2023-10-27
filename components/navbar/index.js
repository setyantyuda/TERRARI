/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex py-5 px-8 font-bold shadow-xl fixed z-20 bg-white w-full'>
        <div className='w-[25%]'>TERRARI</div>
        <div className='w-[50%] flex justify-evenly'>
            <div className='my-auto'>HOME</div>
            <div className='my-auto'>PRODUCTS</div>
            <div className='my-auto'>ABOUT US</div>
            <div className='my-auto'>CONTACT US</div>
        </div>
        <div className='flex justify-evenly w-[25%]'>
            <img src='/search.png' alt='' className='w-8 h-8 object-cover'/>
            <img src='/user.png' alt='' className='w-8 h-8 object-cover'/>
            <img src='/cart.png' alt='' className='w-8 h-8 object-cover'/>
        </div>
    </div>
  )
}
