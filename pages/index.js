/* eslint-disable @next/next/no-img-element */
import { Container } from '../components/container'
import { HeroBanner } from '../components/hero'

export default function Home() {
  return (
    <>
      <HeroBanner/>

      {/* main components */}
      <div className='mt-32'>
        <div className='text-3xl font-semibold mt-12'>
          BEST SELLER
        </div>

        <div className='flex justify-evenly mt-12'>
          <div>
            <img src='/product-images/1.jpg' alt='' className='object-cover w-[300px] h-[300px] rounded-md hover:scale-105 transition-all cursor-pointer'/>
          </div>
          <div>
            <img src='/product-images/2.jpg' alt='' className='object-cover w-[300px] h-[300px] rounded-md hover:scale-105 transition-all cursor-pointer'/>
          </div>
          <div>
            <img src='/product-images/3.jpg' alt='' className='object-cover w-[300px] h-[300px] rounded-md hover:scale-105 transition-all cursor-pointer'/>
          </div>
        </div>

        <div className='text-3xl font-semibold mt-12'>
          OUR PRODUCTS
        </div>

        <div className='flex justify-evenly mt-12'>
          <div>
            <img src='/product-images/4.jpg' alt='' className='object-cover w-[300px] h-[300px] rounded-md hover:scale-105 transition-all cursor-pointer'/>
          </div>
          <div>
            <img src='/product-images/5.jpg' alt='' className='object-cover w-[300px] h-[300px] rounded-md hover:scale-105 transition-all cursor-pointer'/>
          </div>
          <div>
            <img src='/product-images/6.jpg' alt='' className='object-cover w-[300px] h-[300px] rounded-md hover:scale-105 transition-all cursor-pointer'/>
          </div>
        </div>
      </div>
    </>
  )
}
