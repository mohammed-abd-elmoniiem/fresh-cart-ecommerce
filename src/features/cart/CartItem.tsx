'use client'


import React, { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import type { Product } from './cart.type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { clearUserCart, removeItemCart, updateCountItemCart } from './cart.actions'
import { updateCart } from './cartReducer/cartReducer'
import Link from 'next/link'

interface Props {
  product: Product
}

export default function CartItem({ product }: Props) {
  const id = product.product.id

  console.log('product id:', id, product.product.id, product.product._id)

  const dispatch = useDispatch()

  const unitPrice = product.price
  const initialQty = product.count ?? 1
  const [qty, setQty] = useState<number>(initialQty)

  const subtotal = useMemo(() => unitPrice * qty, [unitPrice, qty])


  const updateQty = async(count:number)=>{
        try{
          console.log('update cart item quantity', count, typeof count)
              const response = await updateCountItemCart(product.product.id,count );
              console.log('response update cart',response)
              dispatch(
                updateCart(response)
              )
            }
            catch(error){
              console.log('Error updating cart item quantity:', error)
            }
  }

  


  const increase = useCallback(() => {
    setQty((q) => q + 1)
   

    
    
  }, [])

  const decrease = useCallback(() => {
    setQty((q) => Math.max(1, q - 1))
   

  }, [])

  const remove = async() => {
    
    console.log('remove item', id)

    try{
      const response = await removeItemCart(id)
      dispatch(
        updateCart(response)
      )
      console.log('remove item response', response)
    }catch(error){
      console.log('Error removing cart item:', error)
    }
  }

  return (
    <div  className="flex items-center w-full gap-4 p-2 bg-white rounded-lg shadow-sm border border-neutral-200 relative">

      <Link href={`/product/${product.product.id}`} className=" inset-0 z-10" >
      <div className="relative w-20 h-20 rounded-md overflow-hidden bg-gray-50">
        <Image src={product.product.imageCover} alt={String(product.product.title ?? 'product')} fill className="object-cover" />
      </div>

      <div className="flex-1 max-w-full">
        <div className="flex items-start justify-between gap-3">
          <div className="">
            <h3 className="text-sm font-light  text-gray-900  break-normal ">{product.product.title}</h3>
            <p className="text-xs text-gray-500 mt-1 break-normal ">{product.product.brand?.name}</p>
          </div>

          <div className="text-right">
            <div className="text-sm font-semibold text-gray-900">${product.price.toFixed(2)}</div>
            <button
              onClick={remove}
              aria-label="Remove item"
              className="mt-2 text-xs text-rose-600 bg-rose-400/20 p-2 rounded-full hover:underline z-5"
              type="button"
            >
              <FontAwesomeIcon icon={faTrash}/>
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 z-5">
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 mr-2">Quantity</label>

            <div className="flex items-center border border-neutral-200 rounded-md overflow-hidden">
              <button
                type="button"
                onClick={()=>{
                  decrease()
                   updateQty(qty-1)
                }}
                className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 "
                aria-label="Decrease quantity"

                
              >
                −
              </button>
              <div className="px-4 py-1 text-sm font-medium text-gray-900 bg-white">{qty}</div>
              <button
                type="button"
                onClick={()=>{
                  increase()
                   updateQty(qty+1)
                }}
                className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-700">
            <div className="text-xs text-gray-500">Subtotal</div>
            <div className="font-semibold">${subtotal.toFixed(2)}</div>
          </div>
        </div>
      </div>
      
      </Link>
    </div>
  )
}
