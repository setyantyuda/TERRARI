
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { productList } from '../../../utils/productList'
import { PageTitle } from '../../../components/PageTitle'
import { useCart } from '../../../utils/cart'

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
        dispatch({ type: 'ADD_TO_CART', payload: id });
    };


  return (
    <>
        <PageTitle title="SHOP NOW"/>
        <div className='mt-12 flex justify-between space-x-8'>
            <div className='w-[500px] h-full'>
                <img src={data?.image} alt='' className='aspect-square rounded-md object-cover w-full h-full'/>
            </div>
            <div className='w-[50%] space-y-5'>
                <div className='font-semibold'>{"BUY NOW BEFORE IT'S TOO LATE"}</div>
                <div className='text-4xl font-bold'>{data?.name}</div>
                <div className=''>{data?.desc}</div>
                <div className='font-bold text-2xl'>Rp. {data?.price?.toLocaleString("id-ID")}</div>
                <div className='space-y-2'>
                    <div onClick={handleAddToCart} className="cursor-pointer border-solid border-2 rounded-xl text-xl text-center border-black font-bold py-2">+ Add Cart</div>
                    <div className="cursor-pointer border-solid border-2 rounded-xl text-xl text-center border-black font-bold py-2">Buy Now</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail