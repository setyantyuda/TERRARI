import React from 'react'
import { useCart } from '../../utils/cart'
import { PageTitle } from '../../components/PageTitle'

const Checkout = () => {
    const { state } = useCart()
  return (
    <div>
        <PageTitle title="Check Out"/>
        {state.cart?.map((item, i) => {
            <div key={i}>Checkout</div>
        })}
    </div>
  )
}

export default Checkout