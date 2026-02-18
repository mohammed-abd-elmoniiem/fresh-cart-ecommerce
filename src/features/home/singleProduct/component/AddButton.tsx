'use client'
import { addProductToCart } from '@/src/features/cart/cart.servcies'
import { stateStype } from '@/src/store/reduxStore/reduxStore'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

export default function AddButton({id}:{id:string}) {

  const auth= useSelector((state:stateStype) => state.authReducer)
  return (
      <button
              type="button"
              className="flex-1 px-4 py-3 bg-main hover:main/90 text-white rounded-md text-sm space-x-2"

              onClick={()=>{

                if(auth.isAuthentication){
                  console.log(id)
                  addProductToCart(id)
                }else{
                  toast.error('you should login first')
                }

              }}
            >

              

              <FontAwesomeIcon icon={faCartShopping} />
              Add to cart
            </button>
  )
}
