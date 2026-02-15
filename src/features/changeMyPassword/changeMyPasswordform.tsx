
'use client'
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

// import { onSubmit } from '../services'
import {zodResolver} from '@hookform/resolvers/zod'

import toast from 'react-hot-toast'

import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faMagnifyingGlass, faCircleStop, faIndent, faInfo, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

import { useDispatch } from 'react-redux'
import { ChangeMyPasswordFormValues } from './types'
import { createNewPasswordSchema } from './changeMyPasswordSchema'
import createNewPasswordRequest from './changeMyPasswordAction'
import changeMyPasswordRequest from './changeMyPasswordAction'
import { setUserInfo } from '../login/reducers/authReducer'
import useLogOut from '@/src/hooks/useLogOut'



export default function ChangeMyPasswordForm() {

  const router = useRouter()

  const dispatch = useDispatch()

      const {logout} = useLogOut()






      const {register,setError,handleSubmit,formState:{errors,isSubmitting}} = useForm<ChangeMyPasswordFormValues>({
    defaultValues:{
      currentPassword:'123456@aA',
      password:'123456@aA',
      rePassword:'123456@aA',

   
   


    },
    mode:'onChange',
    resolver:zodResolver(createNewPasswordSchema),
    reValidateMode:'onChange'
  })
  



  const onSubmit:SubmitHandler<ChangeMyPasswordFormValues> =async function (values){
  
      console.log(values)
  
     const res=  await changeMyPasswordRequest(values)
     console.log('res',res)
  
     if(res?.message !== 'success'){

      toast.error(res?.message || 'there is a problem, try again later')


     

          
    
     }else{

  
      logout()
       

      // indication  to the user
      toast.success(res?.message || 'logged in successfully')

    


      // set token in cookies

    


      // set user info in redux store

    

     



      setTimeout(()=>{
        router.push('/')
      }, 2000)
     }
  
  
  }



  return (
   <form className="grid grid-cols-1 gap-2 bg-gray-50 grow   text-[13px] w-4/5 md:w-2/4 rounded-2xl" action="#" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="uppercase text-2xl font-light text-center">
      change my password
    </h2>

            
         
   <div className=' rounded-md  '>
              <label htmlFor="name" className="capitalize font-light text-md ml-1">enter the current password</label>
              <input type="password"
               className=" bg-white text-black w-full border border-neutral-400  rounded-md px-2 py-1" placeholder="mohamed"

               {...register('currentPassword')}

                />
              
              
              <p className= {` ${ !errors.currentPassword && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.currentPassword?.message}</p>


            </div>

             <div className=' rounded-md  '>
              <label htmlFor="name" className="capitalize font-light text-md ml-1">enter new password</label>
              <input type="password"
               className=" bg-white text-black w-full border border-neutral-400  rounded-md px-2 py-1" placeholder="mohamed"

               {...register('password')}

                />
              
              
              <p className= {` ${ !errors.password && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.password?.message}</p>


            </div>

               <div className=' rounded-md  '>
              <label htmlFor="name" className="capitalize font-light text-md ml-1">confirm the new password</label>
              <input type="password"
               className=" bg-white text-black w-full border border-neutral-400  rounded-md px-2 py-1" placeholder="mohamed"

               {...register('rePassword')}

                />
              
              
              <p className= {` ${ !errors.rePassword && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.rePassword?.message}</p>


            </div>
           
           
           


            <button type="submit" className="bg-blue-600 p-2 rounded-md  text-[17px] text-white">
              {
                isSubmitting ?<>
                <FontAwesomeIcon icon={faSpinner} spin />
                </>:
                 <FontAwesomeIcon icon={faIndent} />

              }

             

     
              
                change the password
              </button>

            <p className=" font-light text-neutral-600">
              don't have an account? 
              < Link href="/signup" className="font-light text-blue-600 ml-2">register here</Link>
            </p>

       
          </form>
  )
}
