'use client'


import { stateStype } from '@/src/store/reduxStore/reduxStore'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import CartSummary from './CartSummery'
import { Product } from './cart.type'

export default function CartScreen() {

   const cartData =  useSelector((state:stateStype)=>state.cartReducer)
  return (

    <div className='grid  gap-2 md:grid-cols-2 w-full relative'>
        <div className=' w-full flex flex-col gap-2'>

            {cartData.data.products.map((product:Product)=> <CartItem product={product} key={product._id} />)}
        </div>
        <div className="w-full">
             <CartSummary products={cartData.data.products} />
        </div>

     

  </div>)
}
