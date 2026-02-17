


import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

export default function ProductCardInOrder({ item }: { item: any }) {
  const totalPrice = item.price * item.count;


  

  return (
    <Link href={`/product/${item.product._id}`} className="bg-white rounded-xl  transition border border-gray-100 p-4">

      <div className="flex flex-col sm:flex-row gap-4">

        {/* Product Image */}
        <div className="w-full sm:w-40 h-40 shrink-0">
          <img
            src={item.product.imageCover}
            alt={item.product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">

          <div className="space-y-2">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              {item.product.title}
            </h3>

            {/* Brand & Category */}
            <div className="text-sm text-gray-500 flex gap-4">
              <span>{item.product.brand.name}</span>
              <span>•</span>
              <span>{item.product.category.name}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faStar} className="text-amber-500" />
              <span className="text-sm font-medium text-gray-700">
                {item.product.ratingsAverage}
              </span>
              <span className="text-xs text-gray-400">
                ({item.product.ratingsQuantity})
              </span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-4 gap-3">

            {/* Quantity */}
            <div className="text-sm text-gray-600">
              <span className="font-medium">Quantity:</span> {item.count}
            </div>

            {/* Pricing */}
            <div className="text-right">
              <p className="text-sm text-gray-500">
                ${item.price.toFixed(2)} × {item.count}
              </p>
              <p className="text-lg font-bold text-indigo-600">
                ${totalPrice.toFixed(2)}
              </p>
            </div>

          </div>

        </div>

      </div>
    </Link>
  );
};






