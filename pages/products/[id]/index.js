
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { productList } from '../../../utils/productList'
import { PageTitle } from '../../../components/PageTitle'
import { useCart } from '../../../utils/cart'
import Link from 'next/link'

const ProductDetail = () => {
    const { query } = useRouter()
    const { dispatch } = useCart();
    const [id, setId] = useState(parseInt(query.id))
    const [data, setData] = useState([])

    useEffect(() => {
        setId(parseInt(query.id))
    }, [query.id])
    
    useEffect(() => {
        function getObjectById(arr, id) {
            return arr.find(item => item.id === id)
        }
        const result = getObjectById(productList, id)
        console.log(result)
        if(result !== undefined) {
            setData(result)
        }
    }, [id])

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: data });
    };

    const handleCheckout = () => {
        dispatch({ type: 'ADD_TO_CART', payload: data });
    };


  return (
    <>
        <PageTitle title="SHOP NOW"/>
        <div className='mt-12 md:flex justify-between md:space-x-8'>
            <div className='md:w-[500px] h-full'>
                <img src={data?.image} alt='' className='aspect-square rounded-md object-cover w-full h-full'/>
            </div>
            <div className='md:w-[50%] space-y-5 px-8 md:px-0 mt-8 md:mt-0'>
                <div className='font-semibold'>{"BUY NOW BEFORE IT'S TOO LATE"}</div>
                <div className='text-4xl font-bold'>{data?.name}</div>
                <div className=''>{data?.desc}</div>
                <div className='font-bold text-2xl'>Rp {data?.price?.toLocaleString("id-ID")}</div>
                <div className=''>
                    <div onClick={handleAddToCart} className="mb-2 cursor-pointer border-solid border-2 rounded-xl text-xl text-center border-black font-bold py-2">+ Add Cart</div>
                    <Link href="/checkout">
                        <div onClick={handleCheckout} className="cursor-pointer bg-yellow-100 border-solid border-2 rounded-xl text-xl text-center border-black font-bold py-2">Buy Now</div>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail