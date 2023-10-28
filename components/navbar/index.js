/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const Navbar = () => {
    const handleNavigate = (e) => {
        window.location.href = e
    }
  return (
    <div className='flex py-5 px-8 font-bold shadow-xl fixed z-20 bg-white w-full'>
        <div className='w-[25%] cursor-pointer' onClick={() => handleNavigate('/')}>TERRARI</div>
        <div className='w-[50%] flex justify-evenly'>
            <div className='my-auto cursor-pointer' onClick={() => handleNavigate('/')}>HOME</div>
            <div className='my-auto cursor-pointer' onClick={() => handleNavigate('/products')}>PRODUCTS</div>
            <div className='my-auto cursor-pointer' onClick={() => handleNavigate('/about-us')}>ABOUT US</div>
            <div className='my-auto cursor-pointer' onClick={() => handleNavigate('/contact-us')}>CONTACT US</div>
        </div>
        <div className='flex justify-evenly w-[25%]'>
            <img src='/search.png' alt='' className='w-8 h-8 object-cover'/>
            <img src='/user.png' alt='' className='w-8 h-8 object-cover'/>
            <img src='/cart.png' alt='' className='w-8 h-8 object-cover'/>
        </div>
    </div>
  )
}
