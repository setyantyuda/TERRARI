import React, { useState } from 'react'
import { PageTitle } from '../../components/PageTitle'
import { useCart } from '../../utils/cart'
import { ProductCheckout } from '../../components/product/productCheckout'

const Checkout = () => {
  const { state } = useCart()
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [number, setNumber] = useState("")
  const [modal, setModal] = useState(false)
  const [error, setError] = useState(false)
  const [fileSelected, setFileSelected] = useState(null);
  const [success, setSuccess] = useState(false);
  const totalPrice = state.cart.reduce((accumulator, currentItem) => accumulator + currentItem.totalPrice, 0);
  const onSubmit = () => {
    if (name === "" || address === "" || number === "" || !totalPrice) {
      setError(true)
    } else {
      setError(false)
      setModal(true)
    }
  }

  const handleChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileSelected(event.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  }

  const handleSuccess = () => {
    window.location.href = "/"
  }

  return (
    <div className='relative'>
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
          {error ? (
            <div className='text-red-500 text-center'>Please fill the form above.</div>
          ) : null}
          <div onClick={onSubmit} className='mt-5 bg-yellow-100 w-full py-2 cursor-pointer border-2 border-black border-solid rounded-md text-center text-2xl font-bold'>Checkout</div>
        </div>
      </div>
      <div className={`${modal ? "" : "hidden"} fixed bg-black bg-opacity-30 mx-auto my-auto border-2 z-30 top-0 bottom-0 right-0 left-0`}>
        <div className='md:flex space-x-3 justify-between fixed md:w-[800px] md:h-[530px] px-8 py-10 my-auto mx-auto rounded-xl top-0 bottom-0 left-0 right-0 bg-white'>
          <div onClick={() => setModal(false)} className='absolute right-10 text-3xl font-bold top-5 cursor-pointer'>X</div>
          <div className='md:w-[50%] mt-5'>
            <div className='mb-5'>
              <div>Name</div>
              <div className='font-bold'>{name}</div>
            </div>
            <div className='mb-5'>
              <div>Address</div>
              <div className='font-bold'>{address}</div>
            </div>
            <div className='mb-5'>
              <div>Phone Number</div>
              <div className='font-bold'>{number}</div>
            </div>
            <div className='mb-5'>
              <div>Grand Total</div>
              <div className='font-bold'>Rp {totalPrice.toLocaleString("id-ID")}</div>
            </div>
          </div>
          <div className='md:w-[50%] mt-5'>
            <div className='mb-5'>
              <div>Bank Account</div>
              <div className='font-bold'>BCA</div>
            </div>
            <div className='mb-5'>
              <div>Bank Account</div>
              <div className='font-bold'>PT. TERARRI</div>
            </div>
            <div className='mb-5'>
              <div>Bank Account Number</div>
              <div className='font-bold'>81273987293</div>
            </div>
            <div className='mb-5 h-[150px]'>
              <div>Upload Evidence</div>
              <div className='border-2 border-black rounded-lg h-full overflow-y-auto relative'>
                {fileSelected === null ? (
                  <>
                    <img src='/upload.svg' alt='' className='object-cover w-10 h-10 mx-auto my-auto absolute top-0 bottom-0 left-0 right-0'/>
                    <input 
                      type='file' 
                      className='mt-2 ml-2' 
                      onChange={handleChange}
                      accept=".jpeg,.jpg,.png"
                    />
                  </>
                ) : (
                  <div className='relative'>
                    <img src={fileSelected} alt='' className='object-cover w-full'/>
                    <img onClick={() => setFileSelected(null)} src='/trash.svg' alt='' className='object-cover hover:scale-90 transition-all duration-300 cursor-pointer bg-white rounded-full p-2 w-10 h-10 sticky bottom-0 right-0'/>
                  </div>
                )}
              </div>
            </div>
            {fileSelected ? (
              <div className='flex justify-end pt-5'>
                <div onClick={() => setSuccess(true)}className='bg-yellow-100 shadow-xl hover:scale-90 hover:shadow-md transition-all duration-300 cursor-pointer font-bold py-2 px-4 rounded-xl text center'>Process Payment ?</div>
              </div>
            ) : null}
          </div>
        </div>
        <div className={`${success ? "" : "hidden"} fixed bg-black bg-opacity-30 mx-auto my-auto border-2 z-30 top-0 bottom-0 right-0 left-0`}>
          <div className='justify-between fixed w-[300px] h-[210px] px-8 py-10 my-auto mx-auto rounded-xl top-0 bottom-0 left-0 right-0 bg-white'>
            <div className='font-bold text-xs'>
              Success! 
            </div>
            <div className='font-bold text-xl mt-2'>
              Thank you for shopping with us
            </div>
            <div onClick={handleSuccess}className='mt-2 bg-yellow-100 shadow-xl hover:scale-90 hover:shadow-md text-center transition-all duration-300 cursor-pointer font-bold py-2 px-4 rounded-xl text center'>Okay!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout