import { useState } from "react";
import { useCart } from "../../utils/cart";
import { useEffect } from "react";
import Link from "next/link";

export const ProductCheckout = (props) => {
    const { dispatch } = useCart();
    const [count, setCount] = useState(props.data?.quantity)

    useEffect(() => {
        setCount(props.data?.quantity)
    }, [props.data?.quantity])

    useEffect(() => {
        if( count > props.data?.quantity) {
            dispatch({ type: 'ADD_TO_CART', payload: props.data });
        } else if( count < props.data?.quantity) {
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
        <div className='flex space-x-8'>
            {props.index % 2 === 0 ? (
                <Link href={`/products/${props.data.id}`} className='w-[50%]'>
                    <img src={props.data.image} alt='' className='cursor-pointer w-full md:h-52 aspect-square rounded-md object-cover'/>
                </Link>
            ) : null}
            <div className='ml-3 w-[50%] py-4'>
                <div className={`h-[55%] font-bold md:text-3xl text-xl ${props.index % 2 !== 0 ? "text-right" : ""}`}>{props.data.name}</div>
                <div className={`h-[25%] text-xl ${props.index % 2 !== 0 ? "text-right" : ""}`}>Rp {props.data?.totalPrice?.toLocaleString("id-ID")}</div>
                <div className={`h-[20%] md:mt-0 mt-2 flex ${props.index % 2 !== 0 ? "justify-end" : ""} space-x-3`}>
                    <div onClick={() => setCount(count - 1)} className='cursor-pointer w-7 h-7 flex my-auto border-solid border-2 text-bold text-center rounded-full'>    
                        <div className='w-full h-full text-md my-auto'>~</div>
                    </div>
                    <div className='text-bold cursor-default my-auto'>{count}</div>
                    <div onClick={() => setCount(count + 1)} className='cursor-pointer w-7 h-7 flex my-auto border-solid border-2 text-bold text-center rounded-full'>
                        <div className='w-full h-full text-md my-auto'>+</div>
                    </div>
                </div>
            </div>
            {props.index % 2 !== 0 ? (
                <Link href={`/products/${props.index}`} className='w-[50%]'>
                    <img src={props.data.image} alt='' className='cursor-pointer w-full h-52 aspect-square rounded-md object-cover'/>
                </Link>
            ) : null}
        </div>
    </div>
  )
}