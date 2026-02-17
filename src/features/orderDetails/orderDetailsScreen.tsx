'use client'

import { stateStype } from '@/src/store/reduxStore/reduxStore'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useSelector } from 'react-redux'
import { getUserOrders } from '../orders/ordersActions'
import Loading from '@/src/app/loading'
import toast from 'react-hot-toast'
import ProductCardInOrder from './productCardinOrder'

export default function OrderDetailsScreen({id}:{id:string}) {
    

    const authInfo = useSelector((state:stateStype)=>state.authReducer)

    const {data , status ,isLoading,error} = useQuery({
        queryKey:['allOrders'],
        queryFn:async() => getUserOrders(authInfo.userInfo?.id as string),
        enabled:authInfo.isAuthentication
    })

    if(isLoading) return <Loading/>

    if(status == 'error'){
        toast.error(error.message)
    }
    const order = data?.find((order) => order._id === id)

     const itemsPrice =
    order?.cartItems?.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    ) || 0;


  return (
   
     <div className="min-h-screen bg-gray-100 py-10 md:px-4 ">
      <div className=" mx-auto space-y-6 container p-4">

        {/* ===== Header ===== */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Order #{order?.id}
            </h1>
            <p className="text-sm text-gray-500">
              {/* Placed on {new Date(order?.createdAt).toLocaleString()} */}
            </p>
          </div>

          <div className="flex gap-3">
            <span
              className={`px-4 py-1 text-sm rounded-full font-medium ${
                order?.isDelivered
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {order?.isDelivered ? "Delivered" : "Pending Delivery"}
            </span>

            <span
              className={`px-4 py-1 text-sm rounded-full font-medium ${
                order?.isPaid
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {order?.isPaid ? "Paid" : "Not Paid"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ===== LEFT SIDE ===== */}
          <div className="lg:col-span-2 space-y-6 relative">

            {/* Customer Info */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Customer Information
              </h2>

              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">Name:</span> {order?.user?.name}</p>
                <p><span className="font-medium">Email:</span> {order?.user?.email}</p>
                <p><span className="font-medium">Phone:</span> {order?.user?.phone}</p>
                <p><span className="font-medium">Payment Method:</span> {order?.paymentMethodType}</p>
              </div>
            </div>

            {/* Order Items */}
            <div className=" rounded-xl  p-2 md:p-6">
              <h2 className="text-lg font-semibold mb-6 text-gray-800">
                Order Items
              </h2>

              <div className="flex flex-col items-stretch gap-4">
                {order?.cartItems?.map((item) => (
                 <ProductCardInOrder key={item._id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT SIDE (Summary) ===== */}
          <div className="bg-white rounded-xl shadow p-6 h-fit sticky top-4">
            <h2 className="text-lg font-semibold mb-6 text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Items</span>
                <span>${itemsPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>${order?.taxPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${order?.shippingPrice.toFixed(2)}</span>
              </div>

              <div className="border-t pt-4 flex justify-between font-bold text-lg text-indigo-600">
                <span>Total</span>
                <span>${order?.totalOrderPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


