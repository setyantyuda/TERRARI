import React from 'react'
import { productList } from '../../utils/productList'
import { Product } from '../../components/product'

const ProductsPage = () => {
  return (
    <div className='mt-12'>
        <div className='text-3xl'>All Products</div>
        <div className="grid-cols-3 gap-12 grid mt-12">
            {productList.map((item, i) => (
                <Product key={i} img={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default ProductsPage
