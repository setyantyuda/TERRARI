
import { Container } from '../components/container'
import { HeroBanner } from '../components/hero'
import { Product } from '../components/product'
import { productList } from '../utils/productList'

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
          {productList.slice(0, 3).map((item, i) => (
            <Product key={i} img={item.image} name={item.name} price={item.price} id={item.id}/>
          ))}
        </div>

        <div className='text-3xl font-semibold mt-12'>
          OUR PRODUCTS
        </div>

        <div className='flex justify-evenly mt-12'>
          {productList.slice(3, 6).map((item, i) => (
            <Product key={i} img={item.image} name={item.name} price={item.price} id={item.id} />
          ))}
        </div>
      </div>
    </>
  )
}
