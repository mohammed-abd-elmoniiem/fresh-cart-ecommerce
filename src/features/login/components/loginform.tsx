
'use client'
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import { loginFormValues} from '../types'
// import { onSubmit } from '../services'
import {zodResolver} from '@hookform/resolvers/zod'
import { loginSchema} from '../schema'
import loginRequest from '../loginAction'
import toast from 'react-hot-toast'

import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faMagnifyingGlass, faCircleStop, faIndent, faInfo, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import { setToken } from '../cookie/tokenCookie'
import { setUserInfo } from '../reducers/authReducer'
import { useDispatch } from 'react-redux'



export default function LoginForm() {

  const router = useRouter()

  const dispatch = useDispatch()






      const {register,setError,handleSubmit,formState:{errors,isSubmitting}} = useForm<loginFormValues >({
    defaultValues:{
      
      email:'mohamed.abd.elmoniiem@gmail.com',
      password:'123456@aA',
   
      rememberMe:false


    },
    mode:'onChange',
    resolver:zodResolver(loginSchema)
  })
  



  const onSubmit:SubmitHandler<loginFormValues> =async function (values){
  
      console.log(values)
  
     const res=  await loginRequest(values)
     console.log('res',res)
  
     if(res?.success === false){

      toast.error(res?.message || 'there is a problem, try again later')


      Object.keys(res?.errors).forEach(path=> {
        console.log(path)

        setError(path as keyof loginFormValues,{message:res?.errors[path]})

          
      });
     }else{
       

      // indication  to the user
      toast.success(res?.message || 'logged in successfully')


      // set token in cookies

      setToken(res.data.token,values.rememberMe);
      // console.log(res.data)


      // set user info in redux store

      dispatch(
            setUserInfo({
                isAuthentication:true,
                userInfo:res?.data.user
        
          })
      )

     



      setTimeout(()=>{
        router.push('/')
      }, 2000)
     }
  
  
  }



  return (
   <form className="grid grid-cols-1 gap-2 bg-gray-50 grow   text-[13px] w-1/5 sm:w-2/4 rounded-2xl" action="#" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="uppercase text-2xl font-light text-center">
      login
    </h2>

            
             <div className=' rounded-md  w-full'>
              <label htmlFor="email" className="capitalize font-light text-md ml-1">Your email</label>
              <input type="email"
               className=" bg-white text-black w-full border border-neutral-400  rounded-md px-2 py-1" placeholder="email@example.com"

               {...register('email')}

                />
              
              
              <p className= {` ${ !errors.email && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.email?.message}</p>


            </div>


             <div className=' rounded-md  '>
              <label htmlFor="name" className="capitalize font-light text-md ml-1">password</label>
              <input type="password"
               className=" bg-white text-black w-full border border-neutral-400  rounded-md px-2 py-1" placeholder="mohamed"

               {...register('password')}

                />
              
              
              <p className= {` ${ !errors.password && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.password?.message}</p>


            </div>
           
           
            <div className="flex items-start flex-col">
              <div className="flex items-center h-5">
                <input {...register('rememberMe')} type='checkbox' className="" />
                <label htmlFor="rememberMe" className="font-light text-neutral-700 text-[12px] m-4">remember me
                  
                  
                  
                  </label>
              </div>
              

           


            </div>


            <button type="submit" className="bg-blue-600 p-2 rounded-md  text-[17px] text-white">
              {
                isSubmitting ?<>
                <FontAwesomeIcon icon={faSpinner} spin />
                </>:
                 <FontAwesomeIcon icon={faIndent} />

              }

             

     
              
              login
              </button>

            <p className=" font-light text-neutral-600">
              don't have an account? 
              < Link href="/signup" className="font-light text-blue-600 ml-2">register here</Link>
            </p>

            <Link href={'/forget-password'} className='text-blue-400 hover:underline'>forget the password</Link>
          </form>
  )
}
