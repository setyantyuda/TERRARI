import React, { useState } from 'react'
import { categoryList, productList } from '../../utils/productList'
import { Product } from '../../components/product'
import { PageTitle } from '../../components/PageTitle'

const ProductsPage = () => {
  const [category, setCategory] = useState('all')
  const productByCategory = productList.filter(item => item.category === category)
  return (
    <>
        <PageTitle title="All Products" />
        <div className='my-12 px-8 md:px-0'>
          <div className='text-xl my-3'>Category</div>
          <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
              <div onClick={() => setCategory("all")} className='relative px-4 py-2 first-letter cursor-pointer hover:scale-105 transition-all duration-150 font-bold rounded-xl w-full'>
                <img src='/category-bg.jpg' alt='' className='rounded-xl absolute opacity-80 right-0 left-0 top-0 bottom-0 -z-10 w-full h-full object-cover'/>
                <div className='text-white text-center w-full h-full text-md'>All Products</div>
              </div>
            {categoryList.map((item, i) => (
              <div onClick={() => setCategory(item.value)} key={i} className='relative px-4 py-2 first-letter cursor-pointer hover:scale-105 transition-all duration-150 font-bold rounded-xl w-full'>
                <img src='/category-bg.jpg' alt='' className='rounded-xl absolute opacity-80 right-0 left-0 top-0 bottom-0 -z-10 w-full h-full object-cover'/>
                <div className='text-white text-center w-full h-full text-md'>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='px-8 md:px-0'>
          {category === "all" ? (
            <div className="md:grid-cols-3 md:gap-12 md:grid md:space-y-0 space-y-12 mt-12">
              {productList.map((item, i) => (
                <Product key={i} data={item}/>
              ))}
            </div>
          ) : (
            <div className="md:grid-cols-3 md:gap-12 md:grid md:space-y-0 space-y-12 mt-12">
              {productByCategory.map((item, i) => (
                <Product key={i} data={item}/>
              ))}
            </div>
          )}
        </div>
    </>
  )
}

export default ProductsPage