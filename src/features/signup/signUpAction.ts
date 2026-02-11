
'use server'

import { success } from "zod"
import { signUpSchema } from "./schema"
import { newUser } from "./types"
import axios, { AxiosRequestConfig } from 'axios'
import { FieldError } from "react-hook-form"

export default async function signUpRequest(values:newUser){

   const validation =  signUpSchema.safeParse(values);
       const errors:Record<string ,string>={};


   if(validation.success){

         const options:AxiosRequestConfig= {
            url:'https://ecommerce.routemisr.com/api/v1/auth/signup',
            method:'POST',
            data:values
         }

         try {


            const response = await axios.request(options)
            //  console.log(response.data)
               return {
                  success:true,
                  message:'User created successfully',
                  data:response.data,
                  errors
               }
         } catch (error) {

            //   console.log( 'error 409',error?.status)
              if(error instanceof axios.AxiosError && error?.response?.status === 409){
               errors.email = 'User already exists'
               return {
                  success:false,
                  message:'User already exists',
                  errors
               }
              }else{
               return {
                  success:false,
                  message:'this is a prolem,  try again later',
                  errors
                }
              }
                

            
         }


             

               
         
           
      


   }else{  // this a errors in the validation

   //  console.log(validation.error.issues)

    if(validation.error.issues.length > 0){


        validation.error.issues.forEach(issue=>
            {
               const field :string = issue.path[0] as string

               if( !errors[field]) errors [field] = issue.message
               
                
                
        
        })

        return {
            success:false,
            message:'validation error',
            errors
        }

   }



   }
   return {
            success:false,
            message:'something wrong',
            errors
        }
}