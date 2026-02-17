'use client'

import { stateStype } from '@/src/store/reduxStore/reduxStore'
import React from 'react'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { getUserOrders } from './ordersActions'
import Loading from '@/src/app/loading'
import toast from 'react-hot-toast'
import OrderItem from './orderItem'

export default function OrderScreen() {

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

    console.log(data)


  return (<>
              <div className=''>
                <h2 className="text-lg font-semibold">My Orders</h2>
                <div className="flex flex-col items-stretch gap-3">
    
                  {data != null && !isLoading && data.map(order=> <OrderItem order={order} /> )}
                </div>
                    
                </div>
  </>
   
  )
}
