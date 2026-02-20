'use server'

import { createNewPasswordSchema } from './createNewPasswordSchema';





import axios, { AxiosRequestConfig } from 'axios'
import { createNewPasswordFormValues } from './types';
import { getToken } from '../login/cookie/tokenCookie';



export default async function createNewPasswordRequest(values:createNewPasswordFormValues,code:string):Promise<void>{

   const validation =  createNewPasswordSchema.safeParse(values);
       const errors:Record<string ,string>={};


   if(validation.success){

          

         const options:AxiosRequestConfig= {
            url:'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
            method:'PUT',
           

            data:{
               newPassword:values.newPassword,
               email:values.email,
               resetCode:code
            }
         }

         try {

             console.log('here update pasword')
             console.log(options)
            const response = await axios.request(options)
             console.log(response.data)
               
               
               // return {
               //    success:true,
               //    message:'change passwod successfully',
               //    data:response.data,
               //    errors
               // }
         } catch (error) {

              console.log( error)
              if(error instanceof axios.AxiosError ){
              
               // return {
               //    success:false,
               //    message:'axios error to change password',
               //    errors
               // }
              }else{
               // return {
               //    success:false,
               //    message:'this is a prolem,  try again later',
               //    errors
               //  }
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

      //   return {
      //       success:false,
      //       message:'validation error',
      //       errors
      //   }

   }



   }
   // return {
   //          success:false,
   //          message:'something wrong',
   //          errors
      //   }
}