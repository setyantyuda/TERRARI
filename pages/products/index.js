import React from 'react'
import { productList } from '../../utils/productList'
import { Product } from '../../components/product'
import { PageTitle } from '../../components/PageTitle'

const ProductsPage = () => {
  return (
    <>
        <PageTitle title="All Products" />
        <div className='px-8 md:px-0'>
          <div className="md:grid-cols-3 md:gap-12 md:grid md:space-y-0 space-y-12 mt-12">
              {productList.map((item, i) => (
                <Product key={i} data={item}/>
              ))}
          </div>
        </div>
    </>
  )
}

export default ProductsPage
