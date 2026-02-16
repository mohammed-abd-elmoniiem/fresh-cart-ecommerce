'use client'

import React, { useState } from 'react'
import AddressForm from '../addressess/addressForm'
import {  useQuery } from '@tanstack/react-query'
import { fetchAddressRequest } from '../addressess/addressAction'
import { Address } from '../addressess/types'
import AddressCard from '../addressess/addressCard'
import Loading from '@/src/app/loading'
import Link from 'next/link'
import CartSummary from '../cart/CartSummery'
import { stateStype } from '@/src/store/reduxStore/reduxStore'
import { useSelector } from 'react-redux'
import PaymentSummary from './payment'
import { payment } from './checkout.actions'
import { PaymentInfo, ShippingAddress } from './types'

export default function CheckOutScreen() {

    const [paymentMethod, setPaymentMethod] = useState<'cash'|'card'>('cash')

    const [shipping_Address_state, setShippingAddress] = useState<ShippingAddress | null>(null)

    const cartData =  useSelector((state:stateStype)=>state.cartReducer)

     const{data ,status ,error ,isLoading}  =useQuery({
      queryKey:['addresses'],
      queryFn:fetchAddressRequest
      
     })

     if(status == 'pending'){

        return <Loading/>


     }

     if(status == 'error'){
        return 'error'
     }
      

     const handlePayment = async(pay_info:PaymentInfo)=>{

        const response = await payment(pay_info)

        console.log(response)
        
     }
    
       

        

        
 


  return (
    <div className='flex flex-wrap justify-around'>
        <h2 className="capitalize text-2xl w-full ">
            complete your order
        </h2>

        

        <div className="lg:w-2/5">
            {
                 data.data.length == 0?<>
                        <div className="">
                            empty
                        </div>
                        
                        </>:<div className='  justify-center py-5 space-y-3 shadow-lg p-2 rounded-lg h-100 overflow-y-auto' >
                               <h2 className="w-full flex justify-start capitalize  bg-main text-white shadow p-1 rounded-md text-2xl font-light">your currnt addresses {data?.data.length}</h2>
            
                                    {
                                        data?.data.map((address:Address)=><div key={address._id}

                                        onClick={()=>{
                                            setShippingAddress(address)
                                        }}
                                        
                                        className={`${address._id === shipping_Address_state?._id ? 'border-2 border-main/70':''

                                        } rounded-lg`
                                        
                                        }>
                                            <AddressCard address={address} />
                                            </div> )
                                    }
                        
                        </div>
            
                
                
            

           }

             
            <div className=" text-main m-3 font-light ">
                <Link href={'/my-addresses'} className=' hover:underline'>
                add new address</Link>
            </div>
        
      </div>

      <div className="lg:w-2/5 p-2 space-y-2 rounded-lg">

        <div className="p-3 rounded-xl shadow-lg space-y-3">
            <h3 className="capitalize text-2xl">payment method</h3>

            <div className={`p-2 bg-gray-100 border border-gray-300 
            ${paymentMethod == 'cash' &&'border-main bg-main/20'}
            rounded-md hover:cursor-pointer`}
            onClick={()=>{
                setPaymentMethod('cash')
            }}
            >
                cash on delivary
            </div>


             <div className={`p-2 bg-gray-100 border border-gray-300 
            ${paymentMethod == 'card' &&'border-main bg-main/20'}
            rounded-md hover:cursor-pointer`}
            onClick={()=>{
                setPaymentMethod('card')
            }}
            >
                online payment
            </div>



        </div>
            <PaymentSummary products={cartData.data.products}/>

            <div className="mt-4">
                <button  className="w-full px-4 py-3 bg-main hover:bg-main/70 text-white text-sm font-medium rounded-md block text-center"

                onClick={()=>{
                    if(shipping_Address_state != null){
                       
                            const PI:PaymentInfo={
                            url:paymentMethod == 'cash' ? '':location.origin,
                            paymentMethod:paymentMethod,
                            shippingAddress:shipping_Address_state,
                            cartId:cartData.cartId

                              }

                             handlePayment(PI)
                    }

                    console.log('payment')
                
                    

                }}
                
                
                >
                payment
                </button>
            </div>

        </div>

    </div>
  )
}
