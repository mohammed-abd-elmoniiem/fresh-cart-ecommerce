'use server'



import axios, { AxiosRequestConfig } from 'axios'
import { resetCodeSchema } from './resetCodeSchema';
import { resetCodeFormValues } from './types';




export default async function resetCodeRequest(values:resetCodeFormValues):Promise<{status:string}>{

   console.log(values)

   const validation =  resetCodeSchema.safeParse(values);
       


   if(validation.success){

         const options:AxiosRequestConfig= {
            url:'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
            method:'POST',
            data:values
         }

         try {



            const response = await axios.request(options)
             console.log(response.data)
               
               
               return response.data
         } catch (error) {

              console.log( error?.response)
              if(error instanceof axios.AxiosError ){
        
               return {
                  status:'fail'
                
               }
              }else{
               return {
                 status:'fail'
                }
              }
                

            
         }


             

               
         
           
      


   }else{  // this a errors in the validation

   //  console.log(validation.error.issues)




     

        return {
            status:'fail'
        }

   



   }
   return {
           status:'fail'
        }
}