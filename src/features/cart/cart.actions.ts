'use server'

import axios, { Axios, AxiosRequestConfig } from "axios"
import { getToken } from "../login/cookie/tokenCookie"
import { CartData } from "./cart.type"



export async function addToCart(productId:string):Promise<CartData  >{

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
                const cartData:CartData={
            status: 'empty',
            message: '',
            numOfCartItems: 0,
            cartId: '',
            data: {
                _id: '',
                cartOwner: '',
                products: [],
                createdAt: '',
                updatedAt: '',
                __v: 0,
                totalCartPrice: 0
            }

        };
      
        return cartData
    }

}


export async function fetchLoggedUserCart():Promise<CartData  >{

    const token = await getToken()


    const options:AxiosRequestConfig={
        url:'https://ecommerce.routemisr.com/api/v2/cart',
        method:'GET',
        headers:{
            token
        }
    }

    try{
       const response = await axios.request(options)
       console.log('cart in intial',response.data)
       return response.data
    }catch(error){
                const cartData:CartData={
            status: 'error',
            message: '',
            numOfCartItems: 0,
            cartId: '',
            data: {
                _id: '',
                cartOwner: '',
                products: [],
                createdAt: '',
                updatedAt: '',
                __v: 0,
                totalCartPrice: 0
            }

        };
      
        return cartData
    }

}


export async function updateCountItemCart(productId:string , count :number):Promise<CartData  >{

    const token = await getToken()
    console.log(token,'token in update cart')
    console.log(count, typeof count)


    const options:AxiosRequestConfig={
        url:`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
        method:'PUT',
        headers:{
            token,
            "Content-Type":'application/json'
        },
        data:{
            count
        }
    }

    

    try{
       const response = await axios.request(options)
       console.log('cart increae qty',response.data)
       return response.data
    }catch(error){
                const cartData:CartData={
            status: 'error',
            message: '',
            numOfCartItems: 0,
            cartId: '',
            data: {
                _id: '',
                cartOwner: '',
                products: [],
                createdAt: '',
                updatedAt: '',
                __v: 0,
                totalCartPrice: 0
            }

        };
      
        return cartData
    }

}

export async function removeItemCart(productId:string):Promise<CartData  >{

    const token = await getToken()


    const options:AxiosRequestConfig={
        url:`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
        method:'DELETE',
        headers:{
            token
        }
    }

    try{
       const response = await axios.request(options)
       console.log('delete item',response.data)
       return response.data
    }catch(error){
                const cartData:CartData={
            status: 'error',
            message: '',
            numOfCartItems: 0,
            cartId: '',
            data: {
                _id: '',
                cartOwner: '',
                products: [],
                createdAt: '',
                updatedAt: '',
                __v: 0,
                totalCartPrice: 0
            }

        };

        return cartData
    }

}



export async function clearUserCart():Promise<CartData  >{

    const token = await getToken()


    const options:AxiosRequestConfig={
        url:'https://ecommerce.routemisr.com/api/v2/cart',
        method:'DELETE',
        headers:{
            token
        }
    }

    try{
       const response = await axios.request(options)
       console.log('cleared cart',response.data)
       return response.data
    }catch(error){
                const cartData:CartData={
            status: 'error',
            message: '',
            numOfCartItems: 0,
            cartId: '',
            data: {
                _id: '',
                cartOwner: '',
                products: [],
                createdAt: '',
                updatedAt: '',
                __v: 0,
                totalCartPrice: 0
            }

        };
      
        return cartData
    }

}
      