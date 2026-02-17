import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../login/cookie/tokenCookie";
import { PaymentInfo, ResponseCart, ResponseOnline } from "./types";



export async function paymentCash(paymentInfo:PaymentInfo):Promise<ResponseCart|null>{

    console.log(paymentInfo)
    paymentInfo.shippingAddress.postalCode = '123456'

    if(paymentInfo.paymentMethod == 'cash'){

        const token = await getToken()
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v2/orders/${paymentInfo.cartId}`,
            method:'POST',
            headers:{
                token,
                "Content-Type":'application/json'
            },
            data:paymentInfo.shippingAddress
        }


        try{

            const response = await axios.request(options)

            console.log('check ' ,response.data)

            return response.data


        }catch(error){

            console.log(error)

            return  null

        }


        
    }
    return null





}

export async function paymentOnline(paymentInfo:PaymentInfo):Promise<ResponseOnline|null>{

    console.log(paymentInfo)
    paymentInfo.shippingAddress.postalCode = '123456'

   if(paymentInfo.paymentMethod === 'card'){


        const token = await getToken()
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${paymentInfo.cartId}/?url=${paymentInfo.url}`,
            method:'POST',
            headers:{
                token,
                // "Content-Type":'application/json'
            },
            data:paymentInfo.shippingAddress
        }

    


        try{

            const response = await axios.request(options)

            console.log(response.data)

            return response.data


        }catch(error){
            console.log(error)

            return null


        }


    }

    return null





}