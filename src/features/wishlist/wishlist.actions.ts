'use server'

import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../login/cookie/tokenCookie";
import { RootWishlist } from "./wishlist.types";

export async function addToWishlist(productId: string): Promise<RootWishlist > {
    const token = await getToken()
    const option:AxiosRequestConfig ={
        url:'https://ecommerce.routemisr.com/api/v1/wishlist',
        method:'POST',
        headers:{
            token
        },
        data:{
            productId
        }
    }

    try{
    const response= await axios.request(option);

    console.log(response?.data)

    return response?.data

    }catch(error){
        console.log(error)

        return{
            status: 'error',
            message: 'Failed to add to wishlist',
            data: []
        }
    }

}

export async function fetchWishlist(): Promise<RootWishlist > {
    const token = await getToken()
    const option:AxiosRequestConfig ={
        url:'https://ecommerce.routemisr.com/api/v1/wishlist',
        method:'get',
        headers:{
            token
        }
    }

    if(token){
                try{
            const response= await axios.request(option);

            console.log(response?.data)

            return response?.data

            }catch(error){
                console.log(error)

                return{
                    status: 'error',
                    message: 'Failed to add to wishlist',
                    data: []
                }
            }
    }

   return {
       status: 'error',
       message: 'Failed to fetch wishlist',
       data: []
   }

}