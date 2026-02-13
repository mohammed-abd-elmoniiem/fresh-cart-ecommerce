import React, { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import type { Product } from './cart.type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { updateCountItemCart } from './cart.actions'
import { updateCart } from './cartReducer/cartReducer'

interface Props {
  product: Product
}

export default function CartItem({ product }: Props) {
  const id = product.product.id

  const dispatch = useDispatch()

  const unitPrice = product.price
  const initialQty = product.count ?? 1
  const [qty, setQty] = useState<number>(initialQty)

  const subtotal = useMemo(() => unitPrice * qty, [unitPrice, qty])


  const increaseQty = async()=>{
        try{
              const response = await updateCountItemCart(id,qty );
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
    increaseQty()

    
    
  }, [])

  const decrease = useCallback(() => {
    setQty((q) => Math.max(1, q - 1))
  }, [])

  const remove = useCallback(() => {
    // placeholder: implement removal logic where this component is used
    // e.g. call a context / store action or lift state up
    console.log('remove item', id)
  }, [id])

  return (
    <div className="flex items-center w-full gap-4 p-2 bg-white rounded-lg shadow-sm border border-neutral-200">
      <div className="relative w-20 h-20 rounded-md overflow-hidden bg-gray-50">
        <Image src={product.product.imageCover} alt={String(product.product.title ?? 'product')} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="truncate">
            <h3 className="text-sm font-medium text-gray-900 truncate">{product.product.title}</h3>
            <p className="text-xs text-gray-500 mt-1 truncate">{product.product.brand?.name}</p>
          </div>

          <div className="text-right">
            <div className="text-sm font-semibold text-gray-900">${product.price.toFixed(2)}</div>
            <button
              onClick={remove}
              aria-label="Remove item"
              className="mt-2 text-xs text-rose-600 bg-rose-400/20 p-2 rounded-full hover:underline"
              type="button"
            >
              <FontAwesomeIcon icon={faTrash}/>
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 mr-2">Quantity</label>

            <div className="flex items-center border border-neutral-200 rounded-md overflow-hidden">
              <button
                type="button"
                onClick={decrease}
                className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <div className="px-4 py-1 text-sm font-medium text-gray-900 bg-white">{qty}</div>
              <button
                type="button"
                onClick={increase}
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
    </div>
  )
}
