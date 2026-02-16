'use client'
import React from 'react'
import Link from 'next/link'
import type { Address } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { removeAddressRequest } from './addressAction'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { queryClient } from '@/src/providers'

interface Props {
  address: Address
  
}

export default function AddressCard({ address}: Props) {

    console.log(address)

    // const removeAddressMutation = useMutation({
    //     mutationFn:async(id:string)=>{
    //         console.log(id)
    //         return removeAddressRequest(id)

    //     }
    //     ,onSuccess:(data)=>{
    //         console.log(data)
    //         toast.success('delete successfully');
    //         queryClient.invalidateQueries({
    //             queryKey:['addresses']
    //         })
    //     },
    //     onError:(error)=>{
    //         console.log(error)
    //     }
    // })

    const handleRemoveAddress = async(id:string)=>{

        const response = await removeAddressRequest(id)

        if(response.status == 'success'){

              
            toast.success(response.message);
            queryClient.invalidateQueries({
                queryKey:['addresses']
            })

        }else{
      
            toast.success(response.message);
         
        }

        console.log(response)
    }


  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm ">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-gray-900">{address.name}</h3>
            
          </div>
          <p className="font-light text-[10px]">{address._id}</p>

          <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">

            <span className="font-semibold">details:</span>
            {address.details}
            
          </p>

          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold">city:</span>

            {address.city}
          </p>

         

          {address.phone && <p className="text-sm text-gray-600 mt-1">Phone: {address.phone}</p>}
        </div>

        <div className="flex flex-col items-end gap-2">
         
          <button
            type="button"
            onClick={()=>{
                // removeAddressMutation.mutate(address._id as any)
                handleRemoveAddress(address._id as any)
            }}
            
            className="text-xs px-3 py-1 bg-rose-50 border border-rose-200 text-rose-600 rounded hover:bg-rose-100"
          >
            <FontAwesomeIcon icon={faTrash}/>
          </button>
        </div>
      </div>
    </div>
  )
}