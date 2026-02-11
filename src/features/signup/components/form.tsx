
'use client'
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import { newUser } from '../types'
// import { onSubmit } from '../services'
import {zodResolver} from '@hookform/resolvers/zod'
import { signUpSchema } from '../schema'
import signUpRequest from '../signUpAction'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { set } from 'zod'

import Link from 'next/link'



export default function SignUpForm() {

  const router = useRouter()






      const {register,setError,handleSubmit,formState:{errors}} = useForm<newUser >({
    defaultValues:{
      name:'moahmed abd elmoniem',
      email:'mohamed.abd.elmoniiem@gmail.com',
      password:'123456@aA',
      rePassword:'123456@aA',
      phone:'01150185968',
      terms:false


    },
    mode:'onChange',
    resolver:zodResolver(signUpSchema)
  })
  



  const onSubmit:SubmitHandler<newUser> =async function (values){
  
      console.log(values)
  
     const res=  await signUpRequest(values)
     console.log('res',res)
  
     if(res?.success === false){

      toast.error(res?.message || 'this is a problem, try again later',{
        position:'top-center',
        autoClose:5000,
      })


      Object.keys(res?.errors).forEach(path=> {
        console.log(path)

        setError(path as keyof newUser,{message:res?.errors[path]})

          
      });
     }else{

      toast.success(res?.message || 'account created successfully',{
        position:'top-center',
        autoClose:5000,
      })

      setTimeout(()=>{
        router.push('/login')
      }, 2000)
     }
  
  
  }



  return (
   <form className="grid grid-cols-1 gap-2 bg-gray-50    text-[13px] w-1/2 min-w-100 max-w-md p-4 rounded-2xl" action="#" onSubmit={handleSubmit(onSubmit)}>

            <div className=' rounded-md  '>
              <label htmlFor="name" className="capitalize font-light text-md ml-1">Your name</label>
              <input type="text"
               className=" bg-white text-black w-full border border-neutral-400  rounded-md px-2 py-1" placeholder="mohamed"

               {...register('name')}

                />
              <p className= {` ${ !errors.name && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.name?.message}</p>
            </div>
             <div className=' rounded-md '>
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
             <div className=' rounded-md  '>
              <label htmlFor="name" className="capitalize font-light text-md ml-1">confirm password</label>
              <input type="password"
               className=" bg-white text-black w-full border border-neutral-400  rounded-md px-2 py-1" placeholder="mohamed"

               {...register('rePassword')}

                />
              <p className= {` ${ !errors.rePassword && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.rePassword?.message}</p>
            </div> <div className=' rounded-md  '>
              <label htmlFor="name" className="capitalize font-light text-md ml-1">phone</label>
              <input type="text"
               className=" bg-white text-black w-full border border-neutral-400  rounded-md px-2 py-1" placeholder="01150185968"

               {...register('phone')}

                />
              <p className= {` ${ !errors.phone&& 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.phone?.message}</p>
            </div>

           
            <div className="flex items-start flex-col">
              <div className="flex items-center h-5">
                <input {...register('terms')} type='checkbox' className=""/>
                <label htmlFor="terms" className="font-light text-neutral-700 text-[12px] m-4">I accept the 
                  
                  <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="terms">Terms and Conditions</Link>
                  
                  </label>
              </div>
              

              <p className= {` ${ !errors.terms && 'hidden'} text-[11px] text-red-500 ml-2` }>{errors.terms?.message}</p>


            </div>


            <button type="submit" className="bg-blue-600 p-2 rounded-md  text-[17px]">Create an account</button>
            <p className=" font-light text-neutral-600">
              Already have an account? < Link href="/login" className="font-medium text-blue-600">Login here</Link>
            </p>
          </form>
  )
}
