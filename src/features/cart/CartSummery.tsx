import React, { useMemo } from 'react'
import type { Product } from './cart.type'
import { clearUserCart } from './cart.actions';
import { useDispatch } from 'react-redux';
import { updateCart } from './cartReducer/cartReducer';

export default function CartSummary({ products }: { products: Product[] }) {
    const dispatch = useDispatch()
  
    const clearCart = async() => {
          try{
                const response = await clearUserCart();
                console.log('response update cart',response)
                dispatch(
                  updateCart(response)
                )
              }
              catch(error){
                console.log('Error clearing cart:', error)
              }
    }


  const { itemCount, total } = useMemo(() => {
    let items = 0
    let sum = 0
    for (const p of products) {
      const qty = Number((p as any).cartQuantity ?? (p as any).quantity ?? 1)
      const unit = Number((p as any).priceAfterDiscount ?? (p as any).price ?? 0)
      items += qty
      sum += unit * qty
    }
    return { itemCount: items, total: sum }
  }, [products])

  const fmt = (v: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v)

  return (
    <div className=" bg-white border border-neutral-200 rounded-lg p-4 shadow-sm h-fit sticky top-5">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-4 space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <dt className="text-gray-500">Items</dt>
          <dd className="font-medium text-gray-900">{itemCount}</dd>
        </div>

        <div className="flex justify-between">
          <dt className="text-gray-500">Subtotal</dt>
          <dd className="font-medium text-gray-900">{fmt(total)}</dd>
        </div>

        <div className="flex justify-between border-t border-dashed pt-3">
          <dt className="text-gray-500">Estimated total</dt>
          <dd className="text-xl font-semibold text-gray-900">{fmt(total)}</dd>
        </div>
      </div>

      <div className="mt-4">
        <button className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-md">
          Checkout
        </button>
      </div>

       <div className="mt-4">
        <button className="w-full px-4 py-3 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-md"
        onClick={()=>{
          clearCart()

        }}
        
        >
          clear cart
        </button>
      </div>
    </div>
  )
}
