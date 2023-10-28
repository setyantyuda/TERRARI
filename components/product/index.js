import React, { useState } from 'react'
import { useCart } from '../../utils/cart';

export const Product = (props) => {
    const { dispatch } = useCart();
    const [show, setShow] = useState(false)
    const handleNavigate = (e) => {
        window.location.href = `/products/${props.data.id}`
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: props.data });
    };

  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className='relative w-[300px] h-[300px] overflow-hidden rounded-md hover:scale-110 transition-all'>
        <img onClick={() => handleNavigate(props.data.id)} src={props.data.image} alt='' className='w-full h-full rounded-md object-cover cursor-pointer'/>
        <div className={`top-0 ${show ? "right-0" : "-right-40"} flex-row transition-all h-full p-4 w-[140px] absolute bg-[#eaeaea]`}>
            <div className='h-[30%] mt-8 text-right font-semibold text-xl'>{props.data.name}</div>
            <div className='h-[30%] text-right'>
                <div>price</div>
                <div className='text-right font-semibold'>Rp {props.data.price?.toLocaleString("id-ID")}</div>
            </div>
            <div className='h-[20%] space-y-2'>
                <div onClick={handleAddToCart} className="cursor-pointer border-solid border-2 rounded-xl text-xs text-center border-black font-bold">+ Add Cart</div>
                <div onClick={handleNavigate} className="cursor-pointer border-solid border-2 rounded-xl text-xs text-center border-black font-bold">Detail Product</div>
            </div>
        </div>
    </div>
  )
}
