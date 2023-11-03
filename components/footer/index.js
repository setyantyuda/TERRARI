import React, { useEffect, useState } from 'react'

export const Footer = () => {
  const [hide, setHide] = useState(false)

  useEffect(() => {
      if (window.location.pathname === "/sign-in") {
          setHide(true)
      } else {
          setHide(false)
      }
  })
  return (
    <div className={`${hide ? "hidden" : ""} bottom-0 absolute w-full md:max-w-[1100px] max-w-[420px]`}>
      <div className='flex justify-between px-8 md:px-20 text-white bg-[#737373] rounded-t-xl py-5'>
        <div className='w-[30%]'>
          <div className='font-bold'>Jakarta Office</div>
          <div className='mt-3'>
            JL. Danau Tondano X
            Jakarta - Indonesia <br/>
            (+62) 21 1122 3487<br/>
            info@terrarifood.com
          </div>
        </div>
        <div className='w-[30%]'>
          <div className="text-center font-bold">Contact Us</div>
          <div className='md:flex justify-center md:space-y-0 space-y-2 md:space-x-3 mt-3'>
            <img src='/facebook.png' alt='' className='w-10 h-w-10 mx-auto md:mx-0 object-cover hover:scale-105 transition-all cursor-pointer'/>
            <img src='/whatsapp.png' alt='' className='w-10 h-w-10 mx-auto md:mx-0 object-cover hover:scale-105 transition-all cursor-pointer'/>
          </div>
        </div>
        <div className='w-[30%]'>
          <div className="text-right font-bold">Follow Us</div>
          <div className='md:flex justify-end md:space-y-0 space-y-2 md:space-x-3 mt-3'>
            <img src='/twitter.png' alt='' className='w-10 h-w-10 mx-auto md:mx-0 object-cover hover:scale-105 transition-all cursor-pointer'/>
            <img src='/facebook.png' alt='' className='w-10 h-w-10 mx-auto md:mx-0 object-cover hover:scale-105 transition-all cursor-pointer'/>
            <img src='/instagram.png' alt='' className='w-10 h-w-10 mx-auto md:mx-0 object-cover hover:scale-105 transition-all cursor-pointer'/>
          </div>
        </div>
      </div>
      <div className='bg-black py-2 flex justify-center'>
        <div className='text-white text-xs'>© 2023 TERRARI</div>
      </div>
    </div>
  )
}
