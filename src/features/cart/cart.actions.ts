'use server'

import axios, { Axios, AxiosRequestConfig } from "axios"
import { getToken } from "../login/cookie/tokenCookie"
import { CartProductData } from "./cart.type"



export async function addToCart(productId:string):Promise<CartProductData | null >{

    const token = await getToken()


    const options:AxiosRequestConfig={
        url:'https://ecommerce.routemisr.com/api/v2/cart',
        method:'POST',
        headers:{
            token
        },
        data:{
            productId

        }
    }

    try{
       const response = await axios.request(options)
       console.log(response.data)
       return response.data
    }catch(error){
        return null
    }

}