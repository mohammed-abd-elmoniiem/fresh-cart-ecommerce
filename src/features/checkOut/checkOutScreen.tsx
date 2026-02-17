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
import { useDispatch, useSelector } from 'react-redux'
import PaymentSummary from './payment'
import {  paymentCash, paymentOnline } from './checkout.actions'
import { PaymentInfo, ShippingAddress } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHomeAlt, faHomeUser, faReceipt } from '@fortawesome/free-solid-svg-icons'
import { Product } from '../cart/cart.type'
import CartItem from '../cart/CartItem'
import toast from 'react-hot-toast'
import { fetchLoggedUserCart } from '../cart/cart.actions'
import { updateCart } from '../cart/cartReducer/cartReducer'
import { useRouter } from 'next/navigation'

export default function CheckOutScreen() {

    const router = useRouter()

    const [paymentMethod, setPaymentMethod] = useState<'cash'|'card'>('cash')

    const [shipping_Address_state, setShippingAddress] = useState<ShippingAddress | null>(null)

    const cartData =  useSelector((state:stateStype)=>state.cartReducer)

     const{data ,status ,error ,isLoading}  =useQuery({
      queryKey:['addresses'],
      queryFn:fetchAddressRequest
      
     })

     const dispatch = useDispatch()
  
    const getUserCart = async() => {
          try{
                const response = await fetchLoggedUserCart();
                console.log('response update cart',response)
                dispatch(
                  updateCart(response)
                )
              }
              catch(error){
                console.log('Error clearing cart:', error)
              }
    }

     

     if(status == 'pending'){

        return <Loading/>


     }

     if(status == 'error'){
        return 'error'
     }
      

     const handlePayment = async(pay_info:PaymentInfo)=>{

      

        if(paymentMethod === 'cash'){

            try{
                    const response = await paymentCash(pay_info)
                    console.log(response)

                    if(response != null){
                        if(response.status == 'success'){
                            toast.success(response.message)
                            getUserCart()

                            router.push('/')



                        }else{
                            toast.error(response.message)
                        }
                    }else{
                        toast.error('cash server return error')
                    }


            }catch(error){
                console.log(error)
            }
           
        }else{
            console.log(paymentMethod)

            try{

                const response = await paymentOnline(pay_info)
                console.log(response)

                if(response != null){
                    if(response.status == 'success'){
                        toast.success('you will be directed to payment getway')
                       

                        location.href = response.session.url
                        
                    }else{
                        toast.error('online payment error')
                    }
                }else{
                    toast.error('cash server return error')
                }

            }catch(error){

                console.log(error)


            }

            

        }
     }
    
       

        

        
 


  return (
    <div className='flex flex-wrap justify-around'>
        <h2 className="capitalize text-2xl w-full shadow p-2 ">

            <span className='bg-main p-2 rounded-lg mr-3 text-white shadow inline-block'>
                <FontAwesomeIcon icon={faReceipt}/>
            </span>
            complete your order <br/>
            <span className='text-[12px] text-gray-600'>review your items and complete your purchase</span>


        </h2>

        

        <div className="grow w-full md:w-1/2 mt-2">
             <div className="header border p-2 bg-linear-to-r from-rose-800 to-rose-600 text-white rounded-2xl">
                <h3 className="text-xl capitalize ml-2">
                    <FontAwesomeIcon icon={faHomeUser} className='mr-3 text-md' />
                    shipping address
                </h3>
                <p className="text-xs ml-3 text-gray-400 ">where should we deliver your order</p>
             </div>
                    <div className=" text-main m-3 font-light ">
                                    <Link href={'/my-addresses'} className=' hover:underline'>
                                    add new address</Link>
                </div>
             <div className="">

                   {
                 data.data.length == 0?<>
                        <div className="text-center my-5">
                            there does not exist any addresses
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
           
            <div className=' w-full flex flex-col gap-2'>
            
                        {cartData.data.products.map((product:Product)=> <CartItem product={product} key={product._id} />)}
            </div> 
                
                            
            

             </div>
         

             
           
        
      </div>

      <div className="grow md:w-1/2 p-2 space-y-2 rounded-lg">

        <div className="p-3 rounded-xl shadow-lg space-y-3 grow">
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
                <button  className={` w-full px-4 py-3 bg-main  ${shipping_Address_state != null && cartData.data.products.length != 0 ?
                    'hover:bg-main/70 hover:cursor-pointer':'cursor-not-allowed'
                } text-white text-sm font-medium rounded-md block text-center`}

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
