'use server'
import { cookies, headers } from "next/headers";
import { initialStatetype } from "../reducers/authReducer";
import { url } from "inspector";
import axios, { AxiosRequestConfig } from "axios";



export async function setToken (token:string ,rememberMe:boolean):Promise<void>{

const cookieStore = await cookies();

cookieStore.set('token',token,{
    httpOnly:true,
    maxAge:(rememberMe? 30 : 1 )*24*60*60
})

}

export async function getToken ():Promise<string|null>{

const cookieStore = await cookies();

return cookieStore.get('token')?.value || null

}

export async function removeToken ( ):Promise<void>{
const cookieStore = await cookies();
 cookieStore.delete('token')

}

// export async function 

export async function getUserInfoByinitialToken():Promise<initialStatetype>{

    const token = await getToken();
    console.log(token)

    if(!token){
        return {
            isAuthentication:false,
            userInfo:null
        }
    }else{

        try{

            const options:AxiosRequestConfig = {
                url:'https://ecommerce.routemisr.com/api/v1/auth/verifyToken',
                method:'GET',
                headers:{
                    token:token
                }
            }

            const response  = await axios.request(options);

            console.log(response.data)

            if(response?.data?.message === 'verified'){

               

                return {
                    isAuthentication:true,
                    userInfo:{
                        id:response.data.decoded.id,
                        role:response.data.decoded.role,
                        name:response.data.decoded.name,
                        email:response.data.decoded.email
                    }
                }
            }else{

               return{
                    isAuthentication:false,
                    userInfo:null
                }
            }


            // if(response.)

        }catch(error){

            return{
            isAuthentication:false,
            userInfo:null
             }
        }

        
    }

}