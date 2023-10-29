
import React from 'react'

export const Footer = () => {
  return (
    <div className='bottom-0 absolute w-full max-w-[1100px]'>
      <div className='flex justify-between px-20 text-white bg-[#737373] rounded-t-xl py-5'>
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
          <div className='flex justify-center space-x-3 mt-3'>
            <img src='/facebook.png' alt='' className='w-10 h-w-10 object-cover hover:scale-105 transition-all cursor-pointer'/>
            <img src='/whatsapp.png' alt='' className='w-10 h-w-10 object-cover hover:scale-105 transition-all cursor-pointer'/>
          </div>
        </div>
        <div className='w-[30%]'>
          <div className="text-right font-bold">Follow Us</div>
          <div className='flex justify-end space-x-3 mt-3'>
            <img src='/twitter.png' alt='' className='w-10 h-w-10 object-cover hover:scale-105 transition-all cursor-pointer'/>
            <img src='/facebook.png' alt='' className='w-10 h-w-10 object-cover hover:scale-105 transition-all cursor-pointer'/>
            <img src='/instagram.png' alt='' className='w-10 h-w-10 object-cover hover:scale-105 transition-all cursor-pointer'/>
          </div>
        </div>
      </div>
      <div className='bg-black py-2 flex justify-center'>
        <div className='text-white text-xs'>© 2023 TERRARI</div>
      </div>
    </div>
  )
}
