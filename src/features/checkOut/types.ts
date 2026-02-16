import { Addresses } from "next/dist/build/turborepo-access-trace/types"


export interface PaymentInfo{
    cartId:string,
    url:string
    paymentMethod:string,
    shippingAddress:ShippingAddress

}

export interface  ShippingAddress{
         details:string,
        city:string,
        postalCode?:string,
        phone:string,
        _id?:string
    }



