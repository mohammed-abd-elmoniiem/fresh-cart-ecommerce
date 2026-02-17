import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';

import Link from 'next/link';
import { Product } from '../cart/cart.type';

export default function PaymentSummary({ products }: { products: Product[] }) {
    const dispatch = useDispatch()
  
 


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
    <div className=" bg-white border border-neutral-200 rounded-lg p-4 shadow-sm h-fit ">
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

   

     
    </div>
  )
}
