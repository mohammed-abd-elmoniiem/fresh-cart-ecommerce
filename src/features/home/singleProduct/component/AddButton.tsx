'use client'
import { addProductToCart } from '@/src/features/cart/cart.servcies'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function AddButton({id}:{id:string}) {
  return (
      <button
              type="button"
              className="flex-1 px-4 py-3 bg-main hover:main/90 text-white rounded-md text-sm space-x-2"

              onClick={()=>{
                console.log(id)
                addProductToCart(id)


              }}
            >

              

              <FontAwesomeIcon icon={faCartShopping} />
              Add to cart
            </button>
  )
}
