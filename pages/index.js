
import { Container } from '../components/container'
import { HeroBanner } from '../components/hero'
import { Product } from '../components/product'
import { productList } from '../utils/productList'

export default function Home() {
  return (
    <>
      <HeroBanner/>

      {/* main components */}
      <div className='mt-20 px-8 md:px-0'>
        <div className='text-3xl font-semibold mt-12'>
          BEST SELLER
        </div>

        <div className='md:flex space-y-8 md:space-y-0 md:justify-evenly mt-12'>
          {productList.slice(0, 3).map((item, i) => (
            <Product key={i} data={item}/>
          ))}
        </div>

        <div className='text-3xl font-semibold mt-12'>
          OUR PRODUCTS
        </div>

        <div className='md:flex space-y-8 md:space-y-0 justify-evenly mt-12'>
          {productList.slice(3, 6).map((item, i) => (
            <Product key={i} data={item} />
          ))}
        </div>
      </div>
    </>
  )
}
