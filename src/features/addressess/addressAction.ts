
'use server'

import { success } from "zod"
import { AddressSchema } from "./addressSchena"
import { Address, responseAddresses } from "./types"
import axios, { AxiosRequestConfig } from 'axios'
import { FieldError } from "react-hook-form"
import { getToken } from "../login/cookie/tokenCookie"

export default async function addAddressRequest(values:Address):Promise<responseAddresses>{

   const token = await getToken()

   const validation =  AddressSchema.safeParse(values);
       const errors:Record<string ,string>={};


   if(validation.success){

         const options:AxiosRequestConfig= {
            url:'https://ecommerce.routemisr.com/api/v1/addresses',
            method:'POST',
            headers:{
               token
            },
            data:values
         }

         try {


            const response = await axios.request(options)
             console.log(response.data)
               
             return response.data
         } catch (error) {

              
            return {
               status:'error',
               message:'error'
               ,data:[]
            }
                

            
         }


             

               
         
           
      


   }else{  // this a errors in the validation

   //  console.log(validation.error.issues)

    if(validation.error.issues.length > 0){

        return {
               status:'error',
               message:'validation error'
               ,data:[]
            }





   }
   
              return {
               status:'error',
               message:'something wrong ,try later'
               ,data:[]
            }
        
  }

}


export  async function fetchAddressRequest():Promise<responseAddresses>{

   const token = await getToken()

 


  

         const options:AxiosRequestConfig= {
            url:'https://ecommerce.routemisr.com/api/v1/addresses',
            method:'GET',
            headers:{
               token
            }
         }
            
         

         try {


            const response = await axios.request(options)
             console.log(response.data)
               
             return response.data
         } catch (error) {

              
            return {
               status:'error',
               message:  'error'
               ,data:[]
            }
                

            
         }

      }

export  async function removeAddressRequest(addressId:string):Promise<responseAddresses>{

   const token = await getToken()

   console.log(addressId)

 


  

         const options:AxiosRequestConfig= {
            url:`https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,
            method:'DELETE',
            headers:{
               token
            }
         }
            
         

         try {


            const response = await axios.request(options)
             console.log(response.data)
               
             return response.data
         } catch (error) {

            // console.log(error.response.data)

              
            return {
               status:'error',
               message: ' failed to remove address'
               ,data:[]
            }
                

            
         }

      }