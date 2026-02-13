'use client'

import { useDispatch } from "react-redux"
import { fetchLoggedUserCart } from "../features/cart/cart.actions"
import { getUserInfoByinitialToken } from "../features/login/cookie/tokenCookie"
import { setUserInfo } from "../features/login/reducers/authReducer"
import { updateCart } from "../features/cart/cartReducer/cartReducer"
import { useEffect } from "react"

export default function  useStore(){
    const dispatch = useDispatch()
    useEffect(()=>{

           const initializator = async ()=>{

         


         const authPayload = await getUserInfoByinitialToken()

         dispatch(
            setUserInfo(authPayload)
         )
    


        if(authPayload.isAuthentication){

            const cartPayload = await fetchLoggedUserCart()
            dispatch(updateCart(cartPayload))

            

        }
    }

     initializator()
    })

 
}