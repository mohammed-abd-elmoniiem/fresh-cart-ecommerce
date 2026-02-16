import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../login/cookie/tokenCookie";
import { PaymentInfo } from "./types";



export async function payment(paymentInfo:PaymentInfo){

    console.log(paymentInfo)

    if(paymentInfo.paymentMethod == 'cash'){

        const token = await getToken()
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v2/orders${paymentInfo.cartId}`,
            method:'POST',
            headers:{
                token,
                "Content-Type":'application/json'
            },
            data:paymentInfo.shippingAddress
        }


        try{

            const response = await axios.request(options)

            console.log(response)


        }catch(error){

            console.log(error)


        }


        
    }else if(paymentInfo.paymentMethod === 'cart'){


        const token = await getToken()
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${paymentInfo.cartId}/?url=${paymentInfo.url}`,
            method:'POST',
            headers:{
                token,
                "Content-Type":'application/json'
            },
            data:paymentInfo.shippingAddress
        }


        try{

            const response = await axios.request(options)

            console.log(response)


        }catch(error){

            console.log(error)


        }


    }





}