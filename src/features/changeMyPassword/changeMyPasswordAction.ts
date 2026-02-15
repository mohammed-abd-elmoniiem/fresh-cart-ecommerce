'use server'

import { createNewPasswordSchema } from './changeMyPasswordSchema';



import { success } from "zod"

import axios, { AxiosRequestConfig } from 'axios'

import { getToken, setToken } from '../login/cookie/tokenCookie';
import { ChangeMyPasswordFormValues, returnResponseType } from './types';




export default async function changeMyPasswordRequest(values:ChangeMyPasswordFormValues):Promise<returnResponseType>{

   const validation =  createNewPasswordSchema.safeParse(values);
       const errors:Record<string ,string>={};


   if(validation.success){

          const token = await getToken()
          console.log(token)

         const options:AxiosRequestConfig= {
            url:'https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',
            method:'PUT',
            headers:{
               token

            },

            data:values
         }

         try {

             console.log('here change pasword')
            const response = await axios.request(options)
             console.log(response.data)

             if(response?.data?.message == 'success'){

               setToken(response.data.token , false)

               return {
                  
                  message:response?.data?.message,
                     user: response?.data?.user
               
             }
            }
               
               
              
         } catch (error) {

            //   console.log( error.response)
              if(error instanceof axios.AxiosError ){
              
               return {
                 
                  message:'axios error to change password',
                  user:{
                     name: '',
                        email: '',
                        role: ''

                  }
               }
              }else{
               return {
                 
                  message:'failed to change password',
                  user:{
                     name: '',
                        email: '',
                        role: ''

                  }
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
                 
                  message:'validation  error to change password',
                  user:{
                     name: '',
                        email: '',
                        role: ''

                  }
               }

   }



   }

   return {
                 
                  message:'axios error to change password',
                  user:{
                     name: '',
                        email: '',
                        role: ''

                  }
               }

}