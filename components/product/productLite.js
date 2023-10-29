import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCart } from '../../utils/cart';
import Link from 'next/link';

export const ProductLite = (props) => {
    const { dispatch, state } = useCart();
    const [count, setCount] = useState(1)

    useEffect(() => {
        setCount(props.data?.quantity)
    }, [props.data?.quantity])

    useEffect(() => {
        if( count > props.data?.quantity) {
            dispatch({ type: 'ADD_TO_CART', payload: props.data });
        }
        if( count < props.data?.quantity) {
            dispatch({ type: 'DECREASE_QUANTITY', payload: props.data });
        }
    }, [count])

    useEffect(() => {
        if (count === 0) {
            dispatch({ type: 'REMOVE_FROM_CART', payload: props.data });
        }
    }, [count])


  return (
    <div className='bg-white mb-5 border-2 border-black border-solid w-full p-3 rounded-md relative'>
        <div className='flex'>
            <Link href={`/products/${props.data.id}`} className='w-[50%]'>
                <img src={props.data.image} alt='' className='cursor-pointer w-full h-28 aspect-square rounded-md object-cover'/>
            </Link>
            <div className='ml-3'>
                <div className='h-[35%] font-bold'>{props.data.name}</div>
                <div className='h-[30%] '>Rp {props.data?.totalPrice?.toLocaleString("id-ID")}</div>
                <div className='h-[30%] flex space-x-3'>
                    <div onClick={() => setCount(count - 1)} className='cursor-pointer w-7 h-7 flex my-auto border-solid border-2 text-bold text-center rounded-full'>    
                        <div className='w-full h-full text-md my-auto'>~</div>
                    </div>
                    <div className='text-bold cursor-default my-auto'>{count}</div>
                    <div onClick={() => setCount(count + 1)} className='cursor-pointer w-7 h-7 flex my-auto border-solid border-2 text-bold text-center rounded-full'>
                        <div className='w-full h-full text-md my-auto'>+</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
