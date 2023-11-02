import React, { useState } from 'react'
import { useCart } from '../../utils/cart';
import Link from 'next/link';

export const Product = (props) => {
    const { dispatch } = useCart();
    const [show, setShow] = useState(false)
    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: props.data });
    };

  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className='relative md:w-[300px] md:h-[300px] overflow-hidden aspect-square rounded-md mx-auto hover:scale-110 transition-all'>
        <Link href={`/products/${props.data.id}`}>
            <img src={props.data.image} alt='' className='w-full h-full rounded-md object-cover cursor-pointer'/>
        </Link>
        <div className={`top-0 ${show ? "right-0" : "-right-40"} flex-row transition-all h-full p-4 w-[140px] absolute bg-[#eaeaea]`}>
            <div className='h-[30%] mt-8 text-right font-semibold text-xl'>{props.data.name}</div>
            <div className='h-[30%] text-right'>
                <div>price</div>
                <div className='text-right font-semibold'>Rp {props.data.price?.toLocaleString("id-ID")}</div>
            </div>
            <div className='h-[20%]'>
                <div onClick={handleAddToCart} className="mb-2 cursor-pointer border-solid border-2 rounded-xl text-xs text-center border-black font-bold">+ Add Cart</div>
                <Link href={`/products/${props.data.id}`}>
                    <div className="cursor-pointer border-solid border-2 rounded-xl text-xs text-center border-black font-bold">Detail Product</div>
                </Link>
            </div>
        </div>
    </div>
  )
}
