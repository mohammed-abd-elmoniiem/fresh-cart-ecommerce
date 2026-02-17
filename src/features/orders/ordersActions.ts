import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../login/cookie/tokenCookie";
import {  orderInfoType } from "./types";



export async function getUserOrders(userID:string):Promise<orderInfoType[] | null>{

    

    const options:AxiosRequestConfig={
        url:`https://ecommerce.routemisr.com/api/v1/orders/user/${userID}`,
        method:'GET',
       
    }

    try{

        const response = await axios.request(options)
        console.log(response)
        return response.data
    }catch(error){
        console.log(error)
        return null
    }
}