import React, { useState } from 'react'
import { PageTitle } from '../../components/PageTitle'
import { useCart } from '../../utils/cart'
import { ProductCheckout } from '../../components/product/productCheckout'

const Checkout = () => {
  const { state } = useCart()
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [number, setNumber] = useState("")
  const totalPrice = state.cart.reduce((accumulator, currentItem) => accumulator + currentItem.totalPrice, 0);
  const onSubmit = () => {
    alert (`Hi, ${name}, your order is being process! Thank you for purchacing.`)
  }

  return (
    <div>
      <PageTitle title="Check Out"/>
      <div className='px-8 md:px-0'>
        <div className='h-full mt-12 '>
          {state.cart?.map((item, i) => (
            <ProductCheckout data={item} key={i} index={i}/>
          ))}
        </div>
        <div className='md:w-[50%] mt-20 font-semibold'>
          <div className='my-4'>
            <div className='mb-1'>Name :</div>
            <input name='name' value={name} onChange={(e) => setName(e.target.value)} className='px-2 w-full py-3 border-2 border-black border-solid rounded-md'/>
          </div>
          <div className='my-4'>
            <div className='mb-1'>Address :</div>
            <textarea name='address' value={address} onChange={(e) => setAddress(e.target.value)} className='px-2 w-full h-32 py-3 border-2 border-black border-solid rounded-md'/>
          </div>
          <div className='my-4'>
            <div className='mb-1'>Phone Number :</div>
            <input name='number' value={number} onChange={(e) => setNumber(e.target.value)} className='px-2 w-full py-3 border-2 border-black border-solid rounded-md'/>
          </div>
          <div className='font-bold text-left mt-20'>
            <div className='text-xl'>Grand Total</div>
            <div className='text-4xl'>Rp {totalPrice.toLocaleString("id-ID")}</div>
          </div>
          <div onClick={onSubmit} className='mt-5 bg-yellow-100 w-full py-2 cursor-pointer border-2 border-black border-solid rounded-md text-center text-2xl font-bold'>Checkout</div>
        </div>
      </div>
    </div>
  )
}

export default Checkout