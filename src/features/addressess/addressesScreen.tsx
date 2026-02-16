'use client'

import React from 'react'
import { fetchAddressRequest } from './addressAction'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/src/app/loading'
import toast from 'react-hot-toast'
import { Address } from './types'
import AddressForm from './addressForm'
import AddButton from '../home/singleProduct/component/AddButton'
import AddressCard from './addressCard'

export default function AddressesScreen() {

    const{data ,status ,error ,isLoading}  =useQuery({
      queryKey:['addresses'],
      queryFn:fetchAddressRequest
      
     })

     if(status == 'pending'){

        return <Loading/>
     }

     if(status === 'error'){
        toast.error(data?.message|| 'there an error')
        return <div className=""> there is an error</div>
     }


  return (
    <div className='w-full  flex flex-col items-center text-black'>
        
        
        <div className=" w-4/5 md:w-xl flex items-center justify-center">
            <AddressForm/>
        </div>

        {
            data.data.length == 0?<>
            <div className="">
                empty
            </div>
            
            </>:<div className='flex flex-wrap gap-5 items-center justify-center' >

                        {
                            data.data.map((address:Address)=><AddressCard key={address._id} address={address} />)
                        }
            
            </div>
        }


    </div>
  )
}
