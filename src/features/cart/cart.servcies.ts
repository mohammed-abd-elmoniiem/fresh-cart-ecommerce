'use client'
import { toast } from "react-toastify"
import { addToCart } from "./cart.actions"

import { updateCart } from "./cartReducer/cartReducer"
import { CartData } from "./cart.type"

export const addProductToCart = async (id:string):Promise<CartData >=>{
   
      try{
        const response = await addToCart(id)
        toast.success('product added to cart')
        
           return response
        
        
       
        console.log(response)
        

      }catch(error){
        toast.error('Failed to add product to cart')

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