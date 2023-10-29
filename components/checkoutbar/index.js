import React from 'react'
import { PageTitle } from '../PageTitle'
import { ProductLite } from '../product/productLite'
import { useCart } from '../../utils/cart'
import Link from 'next/link'

export const CheckoutBar = (props) => {
  return (
    <div className={`pl-8 pr-4 fixed ${props.show ? "right-0" : "-right-full"} transition-all duration-400 top-0 bottom-0 w-[30%] bg-[#eaeaea] rounded-l-xl z-30 shadow-left`}>
        <div onClick={props.onClose} className='cursor-pointer absolute top-5 left-8 text-4xl z-50 font-bold'>x</div>
        <div className='flex justify-end mt-8 pr-2'>
            <PageTitle title="MY CART"/>
        </div>
        {props.data.length ? (
            <div className='justify-between h-full'>
                <div className='h-[60%] mt-12 overflow-y-auto pr-2 '>
                    {props.data.map((item, i) => (
                        <ProductLite data={item} key={i}/>
                    ))}
                </div>
                <div className='flex justify-between mb-2 mt-4'>
                    <div>Total :</div>
                    <div className='text-bold'>Rp {props.totalPrice.toLocaleString("id-ID")}</div>
                </div>
                <Link href="/checkout">
                    <div onClick={props.onClose} className='cursor-pointer w-full text-center text-bold py-2 bg-white border-2 border-black border-solid rounded-md'>Checkout</div>
                </Link>
            </div>
        ) : (
            <div className='text-center mt-52'>Empty Cart</div>
        )}
    </div>
  )
}
