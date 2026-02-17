'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { orderInfoType } from './types'
//   taxPrice: number
//    shippingPrice: number
//    totalOrderPrice: number
//    paymentMethodType: string
//    isPaid: boolean
//    isDelivered: boolean
//    _id: string
//    user: User
//    cartItems: CartItem[]
//    createdAt: string
//    updatedAt: string
//    id: number
//    __v: number
//    paidAt?: string
export default function OrderItem({ order }: { order: orderInfoType}) {
    
  return (
    <Link href={`/order-details/${order?._id}`} className="  bg-white rounded-xl shadow-lg border border-gray-100 p-6 space-y-6 hover:cursor-pointer">

  {/* Header */}
  <div className="flex justify-between items-center border-b pb-4">
    <div>
      <h2 className="text-xl font-semibold text-gray-800">
        {order?.user?.name}
      </h2>
      <p className="text-sm text-gray-500">
        Order ID: {order?._id}
      </p>
    </div>

    <span
      className={`px-3 py-1 text-xs font-medium rounded-full 
      ${order?.isDelivered 
        ? "bg-green-100 text-green-700" 
        : "bg-yellow-100 text-yellow-700"}`}
    >
      {order?.isDelivered ? "Delivered" : "Pending"}
    </span>
  </div>

  {/* Pricing Section */}
  <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
    <div className="bg-gray-50 p-3 rounded-lg">
      <p className="text-gray-500">Items Price</p>
      <p className="font-semibold text-gray-800">
        $
        {order?.cartItems
          ?.reduce((acc, item) => acc + item.price * item.count, 0)
          .toFixed(2)}
      </p>
    </div>

    <div className="bg-gray-50 p-3 rounded-lg">
      <p className="text-gray-500">Tax</p>
      <p className="font-semibold text-gray-800">
        ${order?.taxPrice?.toFixed(2)}
      </p>
    </div>

    <div className="bg-gray-50 p-3 rounded-lg">
      <p className="text-gray-500">Shipping</p>
      <p className="font-semibold text-gray-800">
        ${order?.shippingPrice?.toFixed(2)}
      </p>
    </div>

    <div className="bg-indigo-50 p-3 rounded-lg">
      <p className="text-indigo-500">Total</p>
      <p className="font-bold text-indigo-700 text-lg">
        ${order?.totalOrderPrice?.toFixed(2)}
      </p>
    </div>
  </div>

  {/* Payment Section */}
  <div className="border-t pt-4 space-y-2 text-sm">
    <div className="flex justify-between">
      <span className="text-gray-500">Payment Method</span>
      <span className="font-medium text-gray-800">
        {order?.paymentMethodType}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">Payment Status</span>
      <span
        className={`font-medium ${
          order?.paidAt ? "text-green-600" : "text-red-600"
        }`}
      >
        {order?.paidAt
          ? new Date(order.paidAt).toLocaleString()
          : "Not Paid"}
      </span>
    </div>
  </div>

  {/* Dates */}
  <div className="border-t pt-4 text-xs text-gray-500 space-y-1">
    <p>Created: {new Date(order?.createdAt).toLocaleString()}</p>
    <p>Updated: {new Date(order?.updatedAt).toLocaleString()}</p>
  </div>

</Link>

  )
}