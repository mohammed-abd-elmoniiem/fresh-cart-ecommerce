
'use client'
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

// import { onSubmit } from '../services'
import {zodResolver} from '@hookform/resolvers/zod'

import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faMagnifyingGlass, faCircleStop, faIndent, faInfo, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

import { useDispatch } from 'react-redux'



import { resetCodeFormValues } from './types'
import { resetCodeSchema } from './resetCodeSchema'
import resetCodeRequest from './resetCode.action'




export default function ResetCodeForm() {

  const router = useRouter()

  const dispatch = useDispatch()






      const {register,setError,handleSubmit,formState:{errors,isSubmitting}} = useForm<resetCodeFormValues>({
    defaultValues:{
      
      resetCode:''
     
   


    },
    mode:'onChange',
    resolver:zodResolver(resetCodeSchema)
  })
  



  const onSubmit:SubmitHandler<resetCodeFormValues> =async function (values){
  
      console.log('values',values)
  
     const res=  await resetCodeRequest(values)
     console.log('res verify',res)
  
     if(res.status != 'Success'){

      toast.error( 'there is a problem, try again later',{
        position:'top-center',
        autoClose:2000,
      })


     
     }else{
       

      // indication  to the user
      toast.success('ok' ,{
        position:'top-center',
        autoClose:2000,
      })


    
     



      setTimeout(()=>{
        router.push('/create-new-password')
      }, 2000)
     }
  
  
  }



  return (
   <form className="grid grid-cols-1 gap-2 bg-gray-50   text-[13px] w-4/5 sm:w-2/4 rounded-2xl" action="#" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="uppercase text-2xl font-light text-center">
     verify my email
    </h2>

            
             <div className=' rounded-md  w-full'>
              <label htmlFor="email" className="capitalize font-light text-md ml-1">enter the code</label>
              <input type="text"
               className=" bg-white text-black w-full border border-neutral-400  rounded-md px-2 py-1" placeholder="123456"

               {...register('resetCode')}

                />
              
              
              <p className= {` ${ !errors.resetCode && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.resetCode?.message}</p>


            </div>


           
           

              

           




            <button type="submit" className="bg-blue-600 p-2 rounded-md  text-[17px] text-white">
              {
                isSubmitting ?<>
                <FontAwesomeIcon icon={faSpinner} spin />
                </>:
                 <FontAwesomeIcon icon={faIndent} />

              }

             

     
              
               verify
              </button>

            <p className=" font-light text-neutral-600">
              don't have an account? 
              < Link href="/signup" className="font-light text-blue-600 ml-2">register here</Link>
            </p>
          </form>
  )
}
