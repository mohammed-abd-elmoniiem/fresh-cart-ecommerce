
'use client'
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

// import { onSubmit } from '../services'
import {zodResolver} from '@hookform/resolvers/zod'

import toast from 'react-hot-toast'

import { useRouter } from 'next/navigation'
import { set } from 'zod'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faPhone, faPlusCircle, faSpinner, faTreeCity, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Address } from './types'
import { AddressSchema } from './addressSchena'
import addAddressRequest from './addressAction'
import { useQuery } from '@tanstack/react-query'
import { queryClient } from '@/src/providers'



export default function AddressForm() {

  const router = useRouter()

    // const{data ,status ,error ,isLoading}  =useQuery({
    //   queryKey:['addAddress'],
    //   queryFn:async()=>{
    //     return addAddressRequest(values)
    //   }
    //  })






      const {register,setError,setValue,handleSubmit,formState:{errors , isSubmitting}} = useForm<Address >({
    defaultValues:{
      name:'moahmed abd elmoniem',
      
      city:'elbhyra',
      details:'details',
      phone:'01150185968',
    


    },
    mode:'onChange',
    resolver:zodResolver(AddressSchema)
  })
  



  const onSubmit:SubmitHandler<Address> =async function (values){
  
      console.log(values)

      const response = await addAddressRequest(values)
  
     

   

     console.log('res',response)
  
     if(response.status === 'error'){

      toast.error( response.message)


    
     }else if(response.status == 'success'){

      toast.success(response.message)

      queryClient.invalidateQueries({
        queryKey:['addresses']
      })


      // setTimeout(()=>{
      //   router.push('/login')
      // }, 2000)
     }
  
  
  }



  return (
   <form className="grid grid-cols-1 gap-2  items-center justify-center  w-4/5 text-[13px] lg:w-1/2  max-w-md rounded-2xl grow p-2 bg-neutral-200/20 shadow-xl border border-gray-300" action="#" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="capitalize  text-center  text-gray-700 text-2xl"> add new address</h2>

            <div className=' rounded-md '>
              <label htmlFor="name" className="capitalize font-light text-md ml-1 text-main p-1  rounded-md">
                <FontAwesomeIcon icon={faUser}/> name</label>
              <input type="text"
               className="  text-black w-full bg-gray-100 rounded-md p-2 border border-white" placeholder="mohamed"

               {...register('name')}

                />
              <p className= {` ${ !errors.name && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.name?.message}</p>
            </div>

              
              
           


             <div className=' rounded-md  '>
              <label htmlFor="city" className="capitalize font-light text-md ml-1 text-main p-1   rounded-md">
                <FontAwesomeIcon className='mr-2' icon={faTreeCity}/>city</label>
              <input type="text"
              className="  text-black w-full bg-gray-100 rounded-md p-2 border border-white" placeholder="giza"

               {...register('details')}

                />
              
              
              <p className= {` ${ !errors.city && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.city?.message}</p>


            </div>
             <div className=' rounded-md  '>
              <label htmlFor="details" className="capitalize font-light text-md ml-1 text-main p-1  rounded-md">
                <FontAwesomeIcon icon={faInfo}/>detials</label>
              <input type="text"
                className="  text-black w-full bg-gray-100 rounded-md p-2 border border-white" placeholder="mohamed"

               {...register('details')}

                />
              <p className= {` ${ !errors.details && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.details?.message}</p>
            </div>
            
             <div className=' rounded-md  '>
              <label htmlFor="phone" className="capitalize font-light text-md ml-1 text-main p-1  rounded-md">
                <FontAwesomeIcon icon={faPhone}/>phone</label>
              <input type="text"
                className="  text-black w-full bg-gray-100 rounded-md p-2 border border-white" placeholder="01150185968"

               {...register('phone')}

                />
              <p className= {` ${ !errors.phone&& 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.phone?.message}</p>
            </div>

           
           


            <button type="submit" className="bg-blue-600 text-white p-2 rounded-md w-fit mx-auto  text-[17px] flex gap-2 items-center justify-center">
              {
                 isSubmitting ?
                 <>
                 <FontAwesomeIcon icon={faSpinner} spin/>
                 </>:<>

                 <FontAwesomeIcon icon={faPlusCircle}/>

                 
                 </>

              }
              add new address</button>
           
          </form>
  )
}
