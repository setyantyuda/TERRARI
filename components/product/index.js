/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

export const Product = (props) => {
    const [show, setShow] = useState(false)
  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className='relative w-[300px] h-[300px] overflow-hidden rounded-md hover:scale-105 transition-all'>
        <img src={props.img} alt='' className='w-full h-full rounded-md object-cover cursor-pointer'/>
        <div className={`top-0 ${show ? "right-0" : "-right-40"} flex-row transition-all h-full p-4 w-[140px] absolute bg-[#eaeaea]`}>
            <div className='h-[30%] mt-8 text-right font-semibold text-xl'>{props.name}</div>
            <div className='h-[30%] text-right'>
                <div>price</div>
                <div className='text-right font-semibold'>{props.price.toLocaleString("id-ID")}</div>
            </div>
            <div className='h-[20%] space-y-2'>
                <div onClick={props.addCart} className="cursor-pointer border-solid border-2 rounded-xl text-xs text-center border-black font-bold">+ Add Cart</div>
                <div onClick={props.detail} className="cursor-pointer border-solid border-2 rounded-xl text-xs text-center border-black font-bold">Detail Product</div>
            </div>
        </div>
    </div>
  )
}
