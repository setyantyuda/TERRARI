
import React from 'react'
import { useCart } from '../../utils/cart'
import { useHistory } from 'react-router-dom'

export const Navbar = () => {
    const { state } = useCart()
    const history = useHistory()
    
    const handleNavigate = (e) => {
        history.push(e)
    }
  return (
    <div className='flex py-5 px-8 font-bold shadow-xl fixed z-20 bg-white w-full'>
        <div className='w-[25%] cursor-pointer' onClick={handleNavigate('/')}>TERRARI</div>
        <div className='w-[50%] flex justify-evenly'>
            <div className='my-auto cursor-pointer' onClick={handleNavigate('/')}>HOME</div>
            <div className='my-auto cursor-pointer' onClick={handleNavigate('/products')}>PRODUCTS</div>
            <div className='my-auto cursor-pointer' onClick={handleNavigate('/about-us')}>ABOUT US</div>
            <div className='my-auto cursor-pointer' onClick={handleNavigate('/contact-us')}>CONTACT US</div>
        </div>
        <div className='flex justify-evenly w-[25%]'>
            <img src='/search.png' alt='' className='w-8 h-8 object-cover'/>
            <img src='/user.png' alt='' className='w-8 h-8 object-cover'/>
            <div className='relative'>
                <img src='/cart.png' alt='' className='w-8 h-8 object-cover'/>
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
  )
}
