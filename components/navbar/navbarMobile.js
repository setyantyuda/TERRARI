import React from 'react'
import { PageTitle } from '../PageTitle'
import Link from 'next/link'

export const NavbarMobile = (props) => {
  return (
    <div className={`pl-8 pr-4 fixed ${props.show ? "left-0" : "-left-full"} transition-all duration-400 top-0 bottom-0 w-full md:w-[30%] bg-[#eaeaea] rounded-l-xl z-30 md:shadow-left`}>
        <div onClick={props.onClose} className='cursor-pointer absolute top-5 right-8 text-4xl z-50 font-bold'>x</div>
        <div className='mt-8'>
            <PageTitle title="Navbar"/>
        </div>
        <div className='justify-evenly mt-32 ml-8 space-y-8'>
            <div>
                <Link href="/">
                    <div onClick={props.onClose} className='text-2xl my-auto cursor-pointer'>HOME</div>
                </Link>
            </div>
            <div>
                <Link href="/products">
                    <div onClick={props.onClose} className='text-2xl my-auto cursor-pointer'>PRODUCTS</div>
                </Link>
            </div>
            <div>
                <Link href="/about-us">
                    <div onClick={props.onClose} className='text-2xl my-auto cursor-pointer'>ABOUT US</div>
                </Link>
            </div>
            <div>
                <Link href="/contact-us">
                    <div onClick={props.onClose} className='text-2xl my-auto cursor-pointer'>CONTACT US</div>
                </Link>
            </div>
        </div>
    </div>
  )
}
