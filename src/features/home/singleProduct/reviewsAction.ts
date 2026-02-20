'use server'

import axios, { AxiosRequestConfig } from "axios";
import { Review } from "./SingleProducts.type";
import { getToken } from "../../login/cookie/tokenCookie";

type NewREview = {
    review:string,
    rating:number
}


export async function addReviewToProductServer(productId: string, review:NewREview) {

    const token = await getToken()


    const options:AxiosRequestConfig ={
        url:`https://ecommerce.routemisr.com/api/v1/products/${productId}/reviews`,
        method:'POST',
        headers:{ 
            token,
            "Content-Type":'application/json',
           
        },data:review
    }

    console.log(options )

    try{
        const response = await axios.request(options)
        console.log(response)
        return response
    }catch (error) {
        console.error(error)
    }
  
}