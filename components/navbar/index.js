import React from 'react'
import { useCart } from '../../utils/cart'
import { useState } from 'react';
import Link from 'next/link'
import { CheckoutBar } from '../checkoutbar';

export const Navbar = () => {
    const { state } = useCart()
    const [cart, showCart] = useState(false)
    const totalPrice = state.cart.reduce((accumulator, currentItem) => accumulator + currentItem.totalPrice, 0);
  return (
    <>
        <div className='flex py-5 px-8 font-bold shadow-xl fixed z-20 bg-white w-full'>
            <div className='w-[25%] text-2xl cursor-pointer'>
                <Link href="/">
                    TERRARI
                </Link>
            </div>
            <div className='w-[50%] flex justify-evenly'>
                <Link href="/">
                    <div className='my-auto cursor-pointer'>HOME</div>
                </Link>
                <Link href="/products">
                    <div className='my-auto cursor-pointer'>PRODUCTS</div>
                </Link>
                <Link href="/about-us">
                    <div className='my-auto cursor-pointer'>ABOUT US</div>
                </Link>
                <Link href="/contact-us">
                    <div className='my-auto cursor-pointer'>CONTACT US</div>
                </Link>
            </div>
            <div className='flex justify-evenly w-[25%]'>
                <img src='/search.png' alt='' className='w-8 h-8 object-cover cursor-pointer'/>
                <img src='/user.png' alt='' className='w-8 h-8 object-cover cursor-pointer'/>
                <div className='relative' onClick={() => showCart(true)}>
                    <img src='/cart.png' alt='' className='w-8 h-8 object-cover cursor-pointer'/>
                    {state.cart.length !== 0 ? (
                        <div className='absolute flex -top-2 -right-3 bg-red-500 text-white h-5 w-5 rounded-full'>
                            <div className='my-auto text-center text-xs w-full'>
                                {state.cart.length}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
        <CheckoutBar 
            show={cart}
            data={state.cart}
            totalPrice={totalPrice}
            onClose={() => showCart(false)}
            onOpen={() => showCart(true)}
        />
    </>
  )
}
