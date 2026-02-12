
'use client'
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../features/login/cookie/tokenCookie";

import { setUserInfo } from "../features/login/reducers/authReducer";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { de } from "zod/v4/locales";




export default function useLogOut(){

            const dispach = useDispatch()

            const router = useRouter()

    const logout = async ()=>{



            dispach(
                setUserInfo({
                isAuthentication:false,
                userInfo:null
                
                })
            )

            toast.success('logout successfully')

            router.push('/login');
            router.refresh()

            
            
            await removeToken();
    }


    return {logout}
    




}