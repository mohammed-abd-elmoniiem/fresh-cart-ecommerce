
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
import { fortgetPasswordFormValues } from './types'
import forgetPasswordRequest from './forgetPassword.action'
import { forgetPasswordSchema } from './forgetPasswordschema'
import { setUserInfo } from '../login/reducers/authReducer'



export default function ForgetPasswordForm() {

  const router = useRouter()

  const dispatch = useDispatch()






      const {register,setError,handleSubmit,formState:{errors,isSubmitting}} = useForm<fortgetPasswordFormValues >({
    defaultValues:{
      
      email:'mohamed.abd.elmoniiem@gmail.com'
     
   


    },
    mode:'onChange',
    resolver:zodResolver(forgetPasswordSchema)
  })
  



  const onSubmit:SubmitHandler<fortgetPasswordFormValues> =async function (values){
  
      console.log('values',values)
  
     const res=  await forgetPasswordRequest(values)
     console.log('res forget',res.statusMsm)
  
     if(res.statusMsm == 'fail'){

      toast.error(res?.message || 'there is a problem, try again later',{
        position:'top-center',
        autoClose:2000,
      })


     
     }else{
       

      // indication  to the user
      toast.success(res?.message ,{
        position:'top-center',
        autoClose:2000,
      })


    
     
     
    dispatch(
      setUserInfo({
        isAuthentication:false,
        userInfo:{
          email:values.email
        }
      })
    )

      setTimeout(()=>{
        console.log(values.email)
        router.push('/verify-reset-code')
      }, 2000)
     }
  
  
  }



  return (
   <form className="grid grid-cols-1 gap-2 bg-gray-50 grow   text-[13px] w-1/5 sm:w-2/4 rounded-2xl" action="#" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="uppercase text-2xl font-light text-center">
     forget my password
    </h2>

            
             <div className=' rounded-md  w-full'>
              <label htmlFor="email" className="capitalize font-light text-md ml-1">Your email</label>
              <input type="email"
               className=" bg-white text-black w-full border border-neutral-400  rounded-md px-2 py-1" placeholder="email@example.com"

               {...register('email')}

                />
              
              
              <p className= {` ${ !errors.email && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.email?.message}</p>


            </div>


           
           

              

           




            <button type="submit" className="bg-blue-600 p-2 rounded-md  text-[17px] text-white">
              {
                isSubmitting ?<>
                <FontAwesomeIcon icon={faSpinner} spin />
                </>:
                 <FontAwesomeIcon icon={faIndent} />

              }

             

     
              
               send code
              </button>

            <p className=" font-light text-neutral-600">
              don't have an account? 
              < Link href="/signup" className="font-light text-blue-600 ml-2">register here</Link>
            </p>
          </form>
  )
}
