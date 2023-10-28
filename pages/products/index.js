import React from 'react'
import { productList } from '../../utils/productList'
import { Product } from '../../components/product'
import { PageTitle } from '../../components/PageTitle'

const ProductsPage = () => {
  return (
    <>
        <PageTitle title="All Products" />
        <div>
            <div className="grid-cols-3 gap-12 grid mt-12">
                {productList.map((item, i) => (
                  <Product key={i} data={item}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default ProductsPage
