
import React from 'react'
import { useCart } from '../../utils/cart'
import { useHistory } from "react-router-dom";
import { PageTitle } from '../PageTitle';
import { useState } from 'react';
import { ProductLite } from '../product/productLite';

export const Navbar = () => {
    const { state } = useCart()
    const history = useHistory()
    const [cart, showCart] = useState(false)
    
    const handleNavigate = (e) => {
        window.location.href = e
    }

    const totalPrice = state.cart.reduce((accumulator, currentItem) => accumulator + currentItem.totalPrice, 0);

  return (
    <>
        <div className='flex py-5 px-8 font-bold shadow-xl fixed z-20 bg-white w-full'>
            <div className='w-[25%] text-2xl cursor-pointer' onClick={() => handleNavigate('/')}>TERRARI</div>
            <div className='w-[50%] flex justify-evenly'>
                <div className='my-auto cursor-pointer' onClick={() => handleNavigate('/')}>HOME</div>
                <div className='my-auto cursor-pointer' onClick={() => handleNavigate('/products')}>PRODUCTS</div>
                <div className='my-auto cursor-pointer' onClick={() => handleNavigate('/about-us')}>ABOUT US</div>
                <div className='my-auto cursor-pointer' onClick={() => handleNavigate('/contact-us')}>CONTACT US</div>
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
        <div className={`pl-8 pr-4 fixed ${cart ? "right-0" : "-right-full"} transition-all duration-400 top-0 bottom-0 w-[30%] bg-[#eaeaea] rounded-l-xl z-30 shadow-left`}>
            <div onClick={() => showCart(false)} className='cursor-pointer absolute top-5 left-8 text-4xl z-50 font-bold'>x</div>
            <div className='flex justify-end mt-8 pr-2'>
                <PageTitle title="MY CART"/>
            </div>
            {state.cart.length ? (
                <div className='justify-between h-full'>
                    <div className='h-[60%] mt-12 overflow-y-auto pr-2 '>
                        {state.cart.map((item, i) => (
                            <ProductLite data={item} key={i}/>
                            ))}
                    </div>
                    <div className='flex justify-between mb-2 mt-4'>
                        <div>Total :</div>
                        <div className='text-bold'>Rp {totalPrice.toLocaleString("id-ID")}</div>
                    </div>
                    <div onClick={() => handleNavigate('/checkout')} className='cursor-pointer w-full text-center text-bold py-2 bg-white border-2 border-black border-solid rounded-md'>Checkout</div>
                </div>
            ) : (
                <div className='text-center mt-52'>Empty Cart</div>
            )}
        </div>
    </>
  )
}
