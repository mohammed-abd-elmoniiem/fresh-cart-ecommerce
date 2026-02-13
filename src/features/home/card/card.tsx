'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { productData } from '../../../utils/types'
import { addToCart } from '../../cart/cart.actions'
import { toast } from 'react-toastify'
import { addProductToCart } from '../../cart/cart.servcies'

interface CardProps {
  product: productData
}

export default function Card({ product }: CardProps) {
  const image = product.imageCover ?? product.images?.[0] ?? ''
  const price = product.price
  const discounted = product.priceAfterDiscount


  

  return (
    <div
      aria-label={product.title}
      className="w-full bg-white border border-neutral-200 p-1  rounded-lg overflow-hidden shadow-md text-sm"
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="w-full h-40 p-1 relative">
          <Image
            src={image}
            alt={product.title}
            fill
            className="object-contain"
           
          />
        </div>

        <div className="p-3">
          <h3 className="text-sm font-medium text-gray-900 truncate">{product.title}</h3>
          <p className="text-xs text-gray-500 mt-1 truncate">{product.brand?.name}</p>

          <div className="flex items-start justify-between mt-3">
            <div>
              {discounted ? (
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-rose-600">${discounted.toFixed(2)}</span>
                  <span className="text-xs text-gray-500 line-through">${price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-lg font-semibold">${price.toFixed(2)}</span>
              )}

              <div className="text-xs text-gray-500 mt-1">
                Qty: {product.quantity} · Sold:  { Math.round(product.sold ?? 0) }
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm font-semibold">
                {(product.ratingsAverage ?? 0).toFixed(1)} <span className="text-amber-500">★</span>
              </div>
              <div className="text-xs text-gray-500">{product.ratingsQuantity} reviews</div>
            </div>
          </div>

          {product.availableColors && product.availableColors.length > 0 && (
            <div className="flex gap-2 mt-3">
              {product.availableColors.map((c: any, i: number) => (
                <span
                  key={i}
                  title={String(c)}
                  className="w-4 h-4 rounded-full ring-1 ring-gray-200"
                  style={{ backgroundColor: String(c) }}
                />
              ))}
            </div>
          )}
        </div>
      </Link>

      <div className="flex gap-3 p-3 pt-0">
        <button
          type="button"
          className="flex-1 px-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm rounded transition"

           onClick={()=>{
                console.log(product.id)
                addProductToCart(product.id)


              }}
        >
          Add to cart
        </button>
        <button
          type="button"
          className="px-3 py-2 bg-white border border-gray-200 text-sm rounded hover:bg-gray-50 transition"
        >
          Wishlist
        </button>
      </div>
    </div>
  )
}
