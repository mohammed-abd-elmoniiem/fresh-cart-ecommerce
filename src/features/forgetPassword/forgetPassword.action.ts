
'use server'



import { forgetPasswordSchema} from "./forgetPasswordschema"
import { fortgetPasswordFormValues} from "./types"
import axios, { AxiosRequestConfig } from 'axios'



export default async function forgetPasswordRequest(values:fortgetPasswordFormValues):Promise<{statusMsm:string,message:string}>{

   console.log(values)

   const validation =  forgetPasswordSchema.safeParse(values);
       const errors:Record<string ,string>={};


   if(validation.success){

         const options:AxiosRequestConfig= {
            url:'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
            method:'POST',
            data:values
         }

         try {

            console.log('s+s+s')


            const response = await axios.request(options)
             console.log(response)
               
               
               return response.data
         } catch (error) {

              console.log( error)
              if(error instanceof axios.AxiosError ){
               errors.password = 'Invalid email'
               return {
                  statusMsm:'fail',
                  message:'failed',
                
               }
              }else{
               return {
                 statusMsm:'fail',
                  message:'failed',
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
            statusMsm:'fail',
                  message:'validation error',
        }

   }



   }
   return {
           statusMsm:'fail',
                  message:'wrong !!!',
        }
}