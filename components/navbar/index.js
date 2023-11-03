import React, { useEffect } from 'react'
import { useCart } from '../../utils/cart'
import { useState } from 'react';
import Link from 'next/link'
import { CheckoutBar } from '../checkoutbar';
import { NavbarMobile } from './navbarMobile';

export const Navbar = () => {
    const { state } = useCart()
    const [nav, showNav] = useState(false)
    const [cart, showCart] = useState(false)
    const totalPrice = state.cart.reduce((accumulator, currentItem) => accumulator + currentItem.totalPrice, 0);
    const [hide, setHide] = useState(false)

    useEffect(() => {
        if (window.location.pathname === "/sign-in") {
            setHide(true)
        } else {
            setHide(false)
        }
    })
  return (
    <>
        <div className={`${hide ? "hidden" : ""} flex justify-between md:justify-normal py-5 md:px-12 px-4 font-bold shadow-xl fixed z-20 bg-white w-full`}>
            <div className='md:hidden block'>
                <img onClick={() => showNav(true)} src='/menu.png' alt='' className='w-9 h-9 object-cover'/>
            </div>
            <div className='w-[30%] my-auto md:w-[25%] text-2xl cursor-pointer'>
                <Link href="/">
                    TERRARI
                </Link>
            </div>
            <div className='hidden md:flex w-[50%] my-auto justify-evenly'>
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
            <div className='flex justify-end space-x-8 w-[50%] md:w-[25%]'>
                {/* <img src='/search.png' alt='' className='w-8 h-8 object-cover cursor-pointer'/> */}
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
        <NavbarMobile 
            show={nav}
            data={state.cart}
            totalPrice={totalPrice}
            onClose={() => showNav(false)}
            onOpen={() => showNav(true)}
        />
    </>
  )
}
