
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
import { createNewPasswordFormValues } from './types'
import { createNewPasswordSchema } from './createNewPasswordSchema'
import createNewPasswordRequest from './createNewPasswordAction'



export default function CreateNewPasswordForm() {

  const router = useRouter()

  const dispatch = useDispatch()






      const {register,setError,handleSubmit,formState:{errors,isSubmitting}} = useForm<createNewPasswordFormValues>({
    defaultValues:{
      currentPassword:'123456@aA',
      password:'123456@aA',
      rePassword:'123456@aA',

   
   


    },
    mode:'onChange',
    resolver:zodResolver(createNewPasswordSchema),
    reValidateMode:'onChange'
  })
  



  const onSubmit:SubmitHandler<createNewPasswordFormValues> =async function (values){
  
      console.log(values)
  
     const res=  await createNewPasswordRequest(values)
     console.log('res',res)
  
    //  if(res?.success === false){

    //   toast.error(res?.message || 'there is a problem, try again later',{
    //     position:'top-center',
    //     autoClose:5000,
    //   })


    //   Object.keys(res?.errors).forEach(path=> {
    //     console.log(path)

    //     setError(path as keyof createNewPasswordFormValues,{message:res?.errors[path]})

          
    //   });
    //  }else{
       

    //   // indication  to the user
    //   toast.success(res?.message || 'logged in successfully',{
    //     position:'top-center',
    //     autoClose:5000,
    //   })


    //   // set token in cookies

    


    //   // set user info in redux store

    

     



    //   // setTimeout(()=>{
    //   //   router.push('/')
    //   // }, 2000)
    //  }
  
  
  }



  return (
   <form className="grid grid-cols-1 gap-2 bg-gray-50 grow   text-[13px] w-1/5 sm:w-2/4 rounded-2xl" action="#" onSubmit={handleSubmit(onSubmit)}>
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
