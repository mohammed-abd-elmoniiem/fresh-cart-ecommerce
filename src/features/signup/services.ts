import { success } from 'zod';
import { SubmitHandler } from "react-hook-form";
import { newUser } from "./types";
import signUpRequest from "./signUpAction";


export const onSubmit:SubmitHandler<newUser> =async function (values){

    // console.log(values)

   const res =  await signUpRequest(values)
//    console.log(res)

   if(!res?.success){
    
        
    };
   }


