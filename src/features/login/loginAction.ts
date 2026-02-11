
'use server'

import { success } from "zod"
import { loginSchema} from "./schema"
import { loginFormValues} from "./types"
import axios, { AxiosRequestConfig } from 'axios'
import { setToken } from "./cookie/tokenCookie"


export default async function loginRequest(values:loginFormValues){

   const validation =  loginSchema.safeParse(values);
       const errors:Record<string ,string>={};


   if(validation.success){

         const options:AxiosRequestConfig= {
            url:'https://ecommerce.routemisr.com/api/v1/auth/signin',
            method:'POST',
            data:values
         }

         try {


            const response = await axios.request(options)
            //  console.log(response.data)
               
               
               return {
                  success:true,
                  message:'loged in successfully',
                  data:response.data,
                  errors
               }
         } catch (error) {

            //   console.log( error?.response.data)
              if(error instanceof axios.AxiosError ){
               errors.password = 'Invalid email or password'
               return {
                  success:false,
                  message:'Invalid email or password',
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